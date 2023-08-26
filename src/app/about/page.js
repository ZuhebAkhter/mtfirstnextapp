import Link from "next/link"

const About=()=>{
    return(
        <>
        <h1>
            Thus are developers
        </h1>
        <ul>
            <li><Link href='/about/1'>Yash</Link></li>
            <li><Link href='/about/2'>Suresh</Link></li>
            <li><Link href='/about/3'>Vaibhav</Link></li>

        </ul>
        </>
    )
  }
  
  export default  About