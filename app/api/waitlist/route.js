import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';


const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, message: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0];
    
    await sheet.addRow({
      Email: email,
      Timestamp: new Date().toISOString()
    });
    
    return new Response(JSON.stringify({ success: true, message: 'Thank you for joining our waitlist!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return new Response(JSON.stringify({ success: false, message: error.message || 'Server error, please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}