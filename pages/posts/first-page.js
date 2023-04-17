import Link from 'next/link';
import Image from 'next/image'

export default function FirstPage() {
  return (
    <>
      <h1>First Page</h1>
      <h2>Name: Nan Haixu</h2>
      <p>I have a mobile phone.</p>
      <br></br>
      <p>task2:</p>
      <Image src="/task2.png" width={640*0.7} height={360*0.7}/>
      <br></br>
      <p>task3:</p>
      <Image src="/task3.png" width={640*0.7} height={360*0.7}/>
      <br>
      </br>
      <h3>
        <Link href="/">Back to home</Link>
      </h3>
    </>
  );
}