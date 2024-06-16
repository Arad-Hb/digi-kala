import { NextResponse } from "next/server"

export const config = {
    matcher:['/dashboard/:path*']
}
export default function middleware(request){

    console.log(request.nextUrl.origin)
    if(request.cookies.get('jwt') === undefined){
        return NextResponse.redirect(`${request.nextUrl.origin}/users/LoginPage`)
    }

}