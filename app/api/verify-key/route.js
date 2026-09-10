import { NextResponse } from 'next/server';

// Global DB Simulation
global.db = global.db || {
  adminPassword: "TSR14",
  orders: [],
  activeKeys: {}
};

export async function POST(req) {
  try {
    const { key } = await req.json();

    if (!key) {
      return NextResponse.json({ status: "failed", code: -2, message: "Key Required" }, { status: 400 });
    }

    const expiryTime = global.db.activeKeys[key];

    if (expiryTime && expiryTime > Date.now()) {
      return NextResponse.json({
        status: "success",
        code: 1,
        message: "Key Activated Successfully",
        expiry_timestamp: Math.floor(expiryTime / 1000),
        key: key
      }, { status: 200 });
    }

    return NextResponse.json({ status: "failed", code: -2, message: "Invalid or Expired Key" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ status: "error", message: "Server Error" }, { status: 500 });
  }
}

