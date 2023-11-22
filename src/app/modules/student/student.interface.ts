// import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherCoNO: string;
  motherName: string;
  motherCoNo: string;
  motherOccupation: string;
};

export type Student = {
  id: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'Male' | 'Female';
  dateOfBirth: string;
  contactNo: string;
  emergencyContact: string;
  bloodGroup: 'A+' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  email: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
};
