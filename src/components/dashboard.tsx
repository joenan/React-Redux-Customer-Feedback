import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Highlighter from "react-highlight-words";
import '../App.css'


const Dashboard = () => {

    var contactListState: any = useSelector((state: any) => state.contact);
    var feedbackListState: any = useSelector((state: any) => state.comment);

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [typedFeedback, setTypedFeedback] = useState("");
    const [selectedCustomer, setSelectedContact]: any = useState(null);
    var [customerComments, setCustomerComments]: any = useState([]);

    // set comment state to react useState
    useEffect(() => {
        setCustomerComments(feedbackListState);
    }, [feedbackListState]);



    const [showAddCustomerFormState, setShowAddCustomerFormState] = React.useState({ showAddCustomerForm: false });
    const [showAddFeedbackFormState, setShowAddFeedbackFormState] = React.useState({ showAddFeedbackForm: false });

    const showCustomerForm = () => {
        setShowAddCustomerFormState({ showAddCustomerForm: !showAddCustomerFormState.showAddCustomerForm });
    }

    const showFeedBackForm = () => {
        console.log('clicked')
        setShowAddFeedbackFormState({ showAddFeedbackForm: !showAddFeedbackFormState.showAddFeedbackForm });
    }

    const newCustomerHandleKeyPress = (e) => {
        console.log(e)
        if (e.key === 'Enter') {
            handleSubmit(e);
        }

        if (e.keyCode === 27) {
            console.log('escape key pressed');
            clearCustomerInputAndCloseForm();
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            return toast.warning("please fill in a user");
        }

        const data = {
            id: contactListState.length + 1,
            name
        }

        dispatch({ type: "ADD_CONTACT", payload: data })
        clearCustomerInputAndCloseForm();

        toast.success("Customer added successfully")
    }

    const getSelectedContact = (c) => {
        dispatch({ type: "ALL_COMMENTS", payload: customerComments })
        dispatch({ type: "FILTER_COMMENT", payload: c })
        setSelectedContact(c);
    }

    const onSearchFeedbackKeyPress = (event) => {
        let term = event.target.value;
        setSearchTerm(term.toLowerCase());
    };

    const onAddFeedbackKeyPress = (c) => {
        if (c.key === 'Enter') {
            addNewCustomerFeedback(typedFeedback);
        }
    }

    const addNewCustomerFeedback = (c) => {

        const feedback = {
            id: customerComments.length - 1, feedback: c, customerId: selectedCustomer.id
        }
        dispatch({ type: "ADD_COMMENT", payload: feedback })
        setTypedFeedback('');
        setShowAddFeedbackFormState({ showAddFeedbackForm: !showAddFeedbackFormState.showAddFeedbackForm });
    }

    const clearCustomerInputAndCloseForm = () => {
        setName('');
        setShowAddCustomerFormState({ showAddCustomerForm: !showAddCustomerFormState.showAddCustomerForm });
    }


    return (

        <div>
            <ToastContainer />
            <div>
                <section className="bg-half bg-light d-table w-100 " style={{ padding: "10px 0 90px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <div className="page-next-level">

                                    <div className="page-next">
                                        <nav aria-label="breadcrumb" className="d-inline-block">
                                            <ul className="breadcrumb bg-white rounded shadow mb-0">
                                                <li className="breadcrumb-item"><span>Home</span></li>
                                                <li className="breadcrumb-item active" aria-current="page">React Redux Customer Feedback App</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="text-center subcribe-form mb-2">
                                    <form style={{ maxWidth: "800px" }}>
                                        <input type="text" className="rounded-pill shadow" placeholder="Search Customers..."
                                            style={{ padding: "5px 20px" }} />
                                        <button type="button" style={{ padding: "2px 20px" }} className="btn btn-pills btn-primary" onClick={() => showCustomerForm()}>Add New</button>
                                    </form>

                                </div>

                                <div className="table-responsive bg-white shadow rounded mt-4 ">

                                    <table className="table mb-0 table-center table-sm" style={{ textAlign: "left" }}>
                                        <thead className="bg-light">
                                            <tr >
                                                <th scope="col" className="border-bottom"></th>
                                                <th scope="col" className="border-bottom" style={{ minWidth: "300px" }}>Customers</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            {showAddCustomerFormState.showAddCustomerForm ?
                                                <tr>
                                                    <td><i className="fa fa-user-plus"></i></td>
                                                    <td><input type="text" value={name} onChange={e => setName(e.target.value)} onKeyDown={newCustomerHandleKeyPress} className="form-control form-control-sm border-0 "
                                                        style={{ color: "blue" }} placeholder="New Customer" />
                                                    </td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                contactListState.map((contact, id) => (
                                                    <tr key={id} style={{ cursor: "pointer" }}>
                                                        <td><i className="fa fa-user-circle"></i></td>
                                                        <td onClick={() => getSelectedContact(contact)} className="text-left small"> {contact.name} </td>
                                                    </tr>
                                                ))}


                                        </tbody>
                                    </table>

                                </div>
                                <div className="float-right mt-2">
                                </div>
                            </div >

                            <div className="col-lg-5 mt-4 mt-lg-0 pt-0 pt-lg-0">

                                <div className="widget mb-2 pb-0">
                                    <div className="widget">

                                        <div className="text-center subcribe-form mb-2">
                                            <form style={{ maxWidth: "800px" }}>
                                                <input type="text" className="rounded-pill shadow" onChange={onSearchFeedbackKeyPress} placeholder="Search Feedbacks..." style={{ padding: "5px 20px" }} />
                                                <button type="button" style={{ padding: "2px 20px" }} className="btn btn-pills btn-primary" onClick={() => showFeedBackForm()}>Add New</button>
                                            </form>
                                        </div>

                                    </div>
                                </div >

                                <div className="table-responsive bg-white shadow rounded mt-4 ">
                                    <table className="table mb-0 table-center table-striped table-sm" style={{ textAlign: "left" }}>
                                        <thead className="bg-white ">
                                            <tr>
                                                <th scope="col" className="border-bottom"></th>
                                                <th scope="col" className="border-bottom" style={{ minWidth: "300px" }}>Feedback</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                showAddFeedbackFormState.showAddFeedbackForm ?
                                                    <tr>
                                                        <td><i className="fa fa-user-plus"></i></td>
                                                        <td><input type="text" className="form-control form-control-sm border-0 "
                                                            style={{ color: "blue" }} placeholder="New Feedback" onChange={e => setTypedFeedback(e.target.value)}
                                                            onKeyPress={onAddFeedbackKeyPress} value={typedFeedback} /></td>
                                                    </tr>
                                                    : null
                                            }

                                            {
                                                selectedCustomer ? customerComments.filter(x => x.feedback.toLowerCase().includes(searchTerm)).map((data, id) => (

                                                    <tr key={id} >
                                                        <td> <i className="fa fa-comments"></i></td>
                                                        <td className="text-left small">
                                                            <Highlighter
                                                                highlightClassName="App-feedback"
                                                                searchWords={[searchTerm]}
                                                                autoEscape={true}
                                                                textToHighlight={data.feedback}
                                                            />,
                                                        </td>
                                                    </tr>
                                                ))

                                                    // selectedCustomer ? customerComments.filter(x => x.feedback.toLowerCase().includes(searchTerm)).map(filteredComments => (
                                                    //     <tr key={filteredComments.id} >
                                                    //         <td> <i className="fa fa-comments"></i></td>
                                                    //         <td className="text-left small">
                                                    //             <Highlighter
                                                    //                 highlightClassName="App-feedback"
                                                    //                 searchWords={[searchTerm]}
                                                    //                 autoEscape={true}
                                                    //                 textToHighlight={filteredComments.feedback}
                                                    //             />,
                                                    //         </td>
                                                    //     </tr>
                                                    //   ))
                                                    :

                                                    <tr>
                                                        <td>  </td>
                                                        <td> Please Select a Customer </td>
                                                    </tr>

                                            }

                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div >

                    </div >

                </section >
            </div >
        </div>
    )
}

export default Dashboard;

