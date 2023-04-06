import Link from 'next/link';

export default function FirstPage() {
  return (
    <>
      <h1>First Page</h1>
      <h2>Name: Nan Haixu</h2>
      <p>I have a mobile phone.</p>
      <br></br>
      <h3>
        <Link href="/">Back to home</Link>
      </h3>
    </>
  );
}