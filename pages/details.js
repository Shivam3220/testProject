import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="d-flex mx-2 overflow-visible">
      <div className="mt-4 w-50" style={{"height":"100vh"}}>
    <Form/>
      </div>
      <div className="w-50 overflow-auto" style={{"height":"100vh"}}>
        <img src="shivamResume.jpg" width="100%" height="auto"/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
