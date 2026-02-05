const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Konfigurasi PaksaSir
const PAKSASIR_CONFIG = {
    API_KEY: process.env.PAKSASIR_API_KEY || 'ES4mWVwOTQC5zp1TYheedHcJlgt4bq7o',
    SLUG: process.env.PAKSASIR_SLUG || 'liviaa-chantika',
    BASE_URL: process.env.PAKSASIR_BASE_URL || 'https://paksa.sir/api'
};

// Endpoint untuk membuat pembayaran QRIS
app.post('/api/create-payment', async (req, res) => {
    try {
        const { amount, customer_email, customer_name } = req.body;
        
        // Validasi input
        if (!amount || amount < 10000) {
            return res.status(400).json({
                success: false,
                message: 'Minimum deposit Rp 10.000'
            });
        }
        
        // Panggil API PaksaSir
        const response = await axios.post(`${PAKSASIR_CONFIG.BASE_URL}/v1/payments`, {
            amount: amount,
            payment_method: 'qris',
            customer_email: customer_email,
            customer_name: customer_name,
            description: `Deposit FlyStore - ${customer_name}`,
            callback_url: `${req.protocol}://${req.get('host')}/api/payment-callback`
        }, {
            headers: {
                'Authorization': `Bearer ${PAKSASIR_CONFIG.API_KEY}`,
                'X-Slug': PAKSASIR_CONFIG.SLUG,
                'Content-Type': 'application/json'
            }
        });
        
        // Simpan transaksi ke database (contoh sederhana)
        const transaction = {
            id: `INV-${Date.now()}`,
            reference_id: response.data.data.reference_id,
            amount: amount,
            status: 'PENDING',
            created_at: new Date(),
            payment_data: response.data.data
        };
        
        // TODO: Simpan ke database
        
        res.json({
            success: true,
            qr_code: response.data.data.qr_code,
            payment_url: response.data.data.payment_url,
            reference_id: response.data.data.reference_id,
            invoice_id: transaction.id,
            message: 'QRIS payment created successfully'
        });
        
    } catch (error) {
        console.error('Payment creation error:', error.response?.data || error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to create payment',
            error: error.response?.data || error.message
        });
    }
});

// Endpoint untuk cek status pembayaran
app.get('/api/check-payment/:referenceId', async (req, res) => {
    try {
        const { referenceId } = req.params;
        
        // Panggil API PaksaSir untuk cek status
        const response = await axios.get(
            `${PAKSASIR_CONFIG.BASE_URL}/v1/payments/${referenceId}`,
            {
                headers: {
                    'Authorization': `Bearer ${PAKSASIR_CONFIG.API_KEY}`,
                    'X-Slug': PAKSASIR_CONFIG.SLUG
                }
            }
        );
        
        // TODO: Update status di database
        
        res.json({
            success: true,
            status: response.data.data.status,
            paid_at: response.data.data.paid_at,
            payment_data: response.data.data
        });
        
    } catch (error) {
        console.error('Payment check error:', error.response?.data || error.message);
        res.status(500).json({
            success: false,
            message: 'Failed to check payment status',
            error: error.response?.data || error.message
        });
    }
});

// Callback dari PaksaSir (webhook)
app.post('/api/payment-callback', async (req, res) => {
    try {
        const paymentData = req.body;
        
        // Verifikasi signature (jika ada)
        // TODO: Implement signature verification
        
        // Update status pembayaran di database
        const { reference_id, status, paid_at } = paymentData;
        
        // TODO: Update database berdasarkan reference_id
        
        console.log('Payment callback received:', {
            reference_id,
            status,
            paid_at
        });
        
        // Beritahu frontend via WebSocket atau polling
        // TODO: Implement real-time notification
        
        res.json({ success: true, message: 'Callback received' });
        
    } catch (error) {
        console.error('Callback error:', error);
        res.status(500).json({ success: false, message: 'Callback processing failed' });
    }
});

// Endpoint untuk mendapatkan riwayat transaksi
app.get('/api/transactions/:userId', (req, res) => {
    // TODO: Implement berdasarkan user ID dari database
    res.json({
        success: true,
        transactions: [] // Ambil dari database
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`PaksaSir API configured for slug: ${PAKSASIR_CONFIG.SLUG}`);
});
