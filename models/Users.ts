import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
// Base User interface
export interface IUser extends Document {
    UserID: number;
    Name: string;
    VirtualCurrency: number;
    Address: string;
    Badges?: Record<string, any>; // Assuming badges are stored as an object
    Age: number;
    PhoneNumber: string;
    Email: string;
    Password:string;
}

// Base User schema
const userSchema: Schema<IUser> = new Schema<IUser>({
    UserID: { type: Number },
    Name: { type: String },
    VirtualCurrency: { type: Number },
    Address: { type: String},
    Badges: { type: Object },
    Age: { type: Number},
    PhoneNumber: { type: String},
    Email: { type: String },
    Password: { type: String } // Define password field
}, { discriminatorKey: 'type' });

// Organization interface
export interface IOrganization extends IUser {
    OrganizationID: number;
    Type: string;
    Description: string;
    Revenue: mongoose.Types.Decimal128;
    CEO: string;
    Industry: string;
}

// Organization schema (inherits from User)
const organizationSchema: Schema<IOrganization> = new Schema<IOrganization>({
    OrganizationID: { type: Number, required: true },
    Type: { type: String, required: true },
    Description: { type: String, required: true },
    Revenue: { type: mongoose.Types.Decimal128, required: true },
    CEO: { type: String, required: true },
    Industry: { type: String, required: true },
});

// Admin interface
export interface IAdmin extends IUser {
    AdminID: number;
    Gender: string;
    Role: string;
}

// Admin schema (inherits from User)
const adminSchema: Schema<IAdmin> = new Schema<IAdmin>({
    AdminID: { type: Number, required: true },
    Gender: { type: String, required: true },
    Role: { type: String, required: true },
});

// Influencer interface
export interface IInfluencer extends IUser {
    InfluencerID: number;
    Gender: string;
    Contract: string;
}

// Influencer schema (inherits from User)
const influencerSchema: Schema<IInfluencer> = new Schema<IInfluencer>({
    InfluencerID: { type: Number, required: true },
    Gender: { type: String, required: true },
    Contract: { type: String, required: true },
});

// Donor interface
export interface IDonor extends IUser {
    DonorID: number;
    DonorName: string;
    PaymentMethod: string;
    Gender: string;
}

// Donor schema (inherits from User)
const donorSchema: Schema<IDonor> = new Schema<IDonor>({
    DonorID: { type: Number, required: true },
    DonorName: { type: String, required: true },
    PaymentMethod: { type: String, required: true },
    Gender: { type: String, required: true },
});

// Create models
export const User = mongoose.model<IUser>('User', userSchema);
export const Organization = User.discriminator<IOrganization>('Organization', organizationSchema);
export const Admin = User.discriminator<IAdmin>('Admin', adminSchema);
export const Influencer = User.discriminator<IInfluencer>('Influencer', influencerSchema);
export const Donor = User.discriminator<IDonor>('Donor', donorSchema);



