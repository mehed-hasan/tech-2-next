import Link from "next/link";

function FillBtn({link,btnText}) {
    return ( 
        <>
        <Link className="blue_btn text-center" href={link}> {btnText} </Link>
        </>
     );
}

export default FillBtn;