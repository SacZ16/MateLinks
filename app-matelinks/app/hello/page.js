

export default async function page() {
    const res = await fetch(`http://localhost:3000/api/hello`)
  const post = await res.json()
    return (
        <div>
            <h1>{post.hello}</h1>
        </div>
    )
}