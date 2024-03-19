import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { login} from '/mongo/exp'

export async function GET(req) {
    await mongoose.connect(process.env.mongoUrl);
    let found = await login.find();
    // let found = await login.find({name:"abhishek singh"});
    return NextResponse.json({found , success:true});
}

export async function POST(req) {
    try {
        let data = await req.json();
        await mongoose.connect(process.env.mongoUrl);
        let check = await login.find({email:data.email});
        // console.log(check);
        if(check.length == 0) {
            // {let login = new login(data);
            // let saved = await login.save();
            // console.log(saved);}

            let saved = await login.insertMany([data]);      // works same as the above code
            return NextResponse.json({saved , success:true});
        }
        else {
            return NextResponse.json({sucess:false});
        }
    }
    catch(err) {
        return NextResponse.json({sucess:false});
    }
}