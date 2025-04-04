import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        orderId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Order", 
            required: true 
        },
        userId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User",  
            required: true 
        },
        amount: { 
            type: Number, 
            required: true, 
            min: 0 
        },
        paymentMethod: { 
            type: String, 
            enum: ["credit_card", "paypal", "bank_transfer", "mobile_money"], 
            required: true 
        },
        transactionId: { 
            type: String, 
            unique: true, 
            required: true, 
            trim: true 
        },
        status: { 
            type: String, 
            enum: ["pending", "completed", "failed", "refunded"], 
            default: "pending"  
        }
    }, 
    { 
        timestamps: true 
    }
);
export const Payment = mongoose.model("Payment", paymentSchema);
