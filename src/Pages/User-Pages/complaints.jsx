import jailImage from "../../Images/jail-with-hands.jpg"
import NavBar from "../../Components/User-Components/navbar"
import { registerComplaint } from "../../services/User-Services/complaint";
import { Link, useNavigate} from "react-router-dom";
import Footer from "../../Components/User-Components/footer";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { toast } from "react-toastify";

function Complaints() {

    const[title,setTitle]=useState('');
    const[complaintType,setComplaintType]=useState('');
    const[complaintDescription,setComplaintDescription]=useState('');
    const[crimeDate,setCrimeDate]=useState('');
    const[suspectName,setSuspectName]=useState('');
    const[suspectAddress,setSuspectAddress]=useState('');
    const[imageProof,setImageProof]=useState('');
    const navigate = useNavigate()

    const onComplaintForm = async () => {
 
        if(title.length===0){
           toast.warning('Enter title')
        }
        else if(complaintType.length===0 || complaintType===0){
          toast.warning("Choose complaint Type")
        }
        else if(complaintDescription.length===0){
            toast.warning("Enter Complaint Description")
        }
        else if(crimeDate.length===0){
            toast.warning("Enter Crime Date")
        }
        else if(suspectName.length===0){
            toast.warning("Enter Suspect Name")
        }
        else if(suspectAddress.length===0){
            toast.warning("Enter Suspect Address")
        }
        
        else{

            const formData = new FormData();
            formData.append('title', title);
            formData.append('complaintType', complaintType);
            formData.append('complaintDescription', complaintDescription);
            formData.append('crimeDate', crimeDate);
            formData.append('suspectName', suspectName);
            formData.append('suspectAddress', suspectAddress);
            if (imageProof) {
                formData.append('imageProof', imageProof);
            }

            const result = await registerComplaint(formData)
      if (result['status'] === 'success') {
        toast.success('Successfully Registered a Complaint')
        navigate('/complaints')
      } else {
        toast.error('Failed to register the user')
      }
          
          
        }
    }
    return (
        <>
            <NavBar />
            <div className="home-container">
                <header className="home-header">
                    <h1>Register Complaint Here</h1>
                </header>
                <section className="home-section">
                    <div className="row mb-3">

                        <div className="col-md-12">
                            <div className="card text-center">
                                <Link to="/complaints"><img src={jailImage} className="card-img-top" alt="Report Crime" /></Link>

                            </div>
                        </div>
                    </div>
                    </section>
            
                <section className="home-section">
                    <div className="home-container">
                        <div className="register mb-0 text-dark">
                            <div className="container-fluid">
                                <div>
                                    <h1 className="text-center p-3 text-light" >
                                        Complaint Form
                                    </h1>
                                </div>
                                <table>
                                    <thead>

                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>
                                                <h6 className="text-light">Title </h6>
                                            </td>
                                            <td >
                                                <div className="col form-floating">
                                                    <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="ComplaintTitle" placeholder="Title of Complaint" />
                                                    <label htmlFor="ComplaintTitle">Title of Complaint</label>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr >
                                            <td>
                                                <h6 className="text-light">Complaint Type</h6>
                                            </td>
                                            <td >
                                                <Form.Select value={complaintType} onChange={(e) => setComplaintType(e.target.value)}>
                                                <option value="0">Choose from below menu</option>
                                                    <option value="1">Accidents</option>
                                                    <option value="2">Assault</option>
                                                    <option value="3">Credit card fraud</option>
                                                    <option value="4">Domestic Voilence</option>
                                                    <option value="5">Drug activity</option>
                                                    <option value="6">Financial Crimes</option>
                                                    <option value="7">Forgery</option>
                                                    <option value="8">Fraud</option>
                                                    <option value="9">Murder</option>
                                                    <option value="10">Personal crimes</option>
                                                    <option value="11">Property crimes</option>
                                                    <option value="12">Rape, Sexual Harrasement</option>
                                                    <option value="13">Weapon law violations</option>
                                                    <option value="14">Other</option>
                                                </Form.Select>

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h6 className="text-light">Complaint Description</h6>
                                            </td>
                                            <td >
                                                <textarea onChange={(e) => setComplaintDescription(e.target.value)} className="form-control" id="ComplaintsDescription" rows="2"></textarea>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h6 className="text-light">Crime Date</h6>
                                            </td>
                                            <td >
                                                <input onChange={(e) => setCrimeDate(e.target.value)} className="col" type="date" ></input>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h6 className="text-light">Suspect Name</h6>
                                            </td>
                                            <td >
                                                <div className="col form-floating">
                                                    <input onChange={(e) => setSuspectName(e.target.value)} type="text" className="form-control" id="SuspectName" placeholder="SuspectName" />
                                                    <label htmlFor="ComplaintTitle">Suspect Name</label>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <h6 className="text-light">Suspect Address</h6>
                                            </td>
                                            <td >
                                                <div className="col form-floating">
                                                    <input onChange={(e) => setSuspectAddress(e.target.value)} type="text" className="form-control" id="SuspectAddress" placeholder="SuspectAddress" />
                                                    <label htmlFor="ComplaintTitle">Suspect Address</label>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><h6 className="text-light">Image Proof (if any) </h6></td>
                                            <td><Form.Group controlId="formFile">
                                            <Form.Control 
                                type="file" 
                                onChange={(event) => {
                                    if (event.target.files.length > 0) {
                                        setImageProof(event.target.files[0].name);
                                    } else {
                                        setImageProof('');
                                    }
                                }} 
                            />
                                            </Form.Group>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input type="checkbox" />

                                            </td>
                                            <td>
                                                <p className="text-light">
                                                    "I hereby register my complaint and acknowledge that I have read and accept all terms and conditions. By submitting this complaint, I agree to abide by the rules and regulations outlined. I understand that my complaint will be processed in accordance with the specified procedures. This serves as my formal acknowledgment and acceptance of the terms and conditions governing the complaint resolution process."
                                                </p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                                <div className='row'>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <div className="col-12 mb-5">
                <button onClick={onComplaintForm} className="btn btn-primary" type="submit">Register Complaint</button>
                </div>
                </div>
                <div className="col-md-4"></div>
                
                </div>    
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}
export default Complaints;