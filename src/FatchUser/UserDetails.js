import React from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from './Components/BackButton';


function UserDetails() {
    const { state } = useLocation()

    console.log(state.user.company_name);

    return (
        <div>
            <h1 className='main-contier' style={{ marginLeft: '20px' }}>
                {`User Detail of ${state.user.first_name}`}
            </h1>
            <div className='contier' style={{ margin: "20px 50% 0px 20px" }}>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <h5 className="mb-0">First Name</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.first_name}</h5>
                            </div>
                            <hr />
                            <div className="col-sm-3">
                                <h5 className="mb-0">Last Name</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.last_name}</h5>
                            </div>
                            <hr />
                            <div className="col-sm-3">
                                <h5 className="mb-0">Company Name</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.company_name}</h5>
                            </div>
                            <hr />
                            <div className="col-sm-3">
                                <h5 className="mb-0">City</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.city}</h5>
                            </div>
                            <hr />
                            <div className="col-sm-3">
                                <h5 className="mb-0">State</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.state}</h5>
                            </div>
                            <hr />
                            <div className="col-sm-3">
                                <h5 className="mb-0">Zip</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.zip}</h5>
                            </div>
                            <hr />
                            <div class="col-sm-3">
                                <h5 className="mb-0">Email</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.email}</h5>
                            </div>
                            <hr />
                            <div className="col-sm-3">
                                <h5 className="mb-0">Web</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.web}</h5>
                            </div>
                            <hr />
                            <div className="col-sm-3">
                                <h5 className="mb-0">age</h5>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <h5>{state.user.age}</h5>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
                < BackButton />
        </div>
    );
}

export default UserDetails;