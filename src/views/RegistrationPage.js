import React from 'react';
import InputField from "../components_/ewa_beans/InputField";
import Button from "../components_/ewa_beans/Button";
import Background from "../components_/ewa_beans/Background";
import '../register_login.css'


const RegistrationPage = () => {
    return (
        <div className="container">
            <div className="registration_page_container">
                <Background/>
                <div className="intro_container">
                    <div className="intro_text">
                        <h3>Welcome To Ewa</h3>
                        <p>Where your cravings for beans are satisfied</p>
                    </div>
                </div>


                <InputField label="Username" fieldType="text" placeholder="Enter your username"/>
                <InputField label="First Name" fieldType="text" placeholder="Enter your First Name"/>
                <InputField label="Last Name" fieldType="text" placeholder="Enter your Last Name"/>
                <InputField label="Password" fieldType="password" placeholder="Enter your Password"/>

                <Button className="registration_btn" buttonName="Register"/>

            </div>
        </div>
    );
};

export default RegistrationPage;