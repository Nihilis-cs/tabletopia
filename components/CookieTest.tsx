import { cookies } from "next/headers"

export default function CookieTest ()  {
    const cookieStore = cookies()
    return cookieStore.getAll().map((cookie) => (
        <div key={cookie.name}>
            <p>Name: {cookie.name}</p>
            <p>Value: {cookie.value}</p>
        </div>
    ))
}