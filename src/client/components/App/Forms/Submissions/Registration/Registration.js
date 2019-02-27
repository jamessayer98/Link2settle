import React, { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from '../../../../Elements/Spinner';

class RegistrationSubmission extends Component {
    componentDidUpdate() {
        window.$('#wizard6').steps({
            headerTag: 'h3',
            bodyTag: 'section',
            autoFocus: true,
            titleTemplate: '<span class="number">#index#</span> <span class="title">#title#</span>',
            cssClass: 'wizard wizard-style-2',
            onFinished: async function (event, currentIndex) {
            }
        })
    }

    render() {
        let submission = this.props.submission
        if (Object.keys(submission.content).length === 0) {
            return (
                <Spinner />
            )
        }
        return (
            <div className="slim-mainpanel">
                <div className="container">
                    <div id="google_translate_element" />
                    
                    <div className="section-wrapper mg-t-20">
                        <label className="section-title">Registration Form</label>
                        <p className="mg-b-20 mg-sm-b-40">Please fill out the following information. </p>

                        <form id="immigrationForm" method="post" action="/forms">

                            <div className="form-group col-md-2" >
                                <input type="hidden" name="fromForm" value="5bedaa68f65be80016ef5a19" />
                            </div>

                            <div id="wizard6">
                                <h3>Client Information</h3>
                                <section>
                                    <div className="form-row">
                                        <div className="form-group col-md-1">
                                            <label htmlFor="salutation">Salutation</label>
                                            <select className="form-control" id="salutation" name="salutation" readOnly defaultValue={submission.content.salutation}>
                                                <option value="">--</option>
                                                <option>Mr</option>
                                                <option>Mrs</option>
                                                <option>Ms.</option>
                                                <option>Dr.</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-3">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" readOnly defaultValue={submission.content.firstName}/>
                                        </div>


                                        <div className="form-group col-md-4">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" readOnly defaultValue={submission.content.lastName}/>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="preferredName">Preferred Name (if different from First Name)</label>
                                            <input type="text" className="form-control" id="preferredName" name="preferredName" readOnly defaultValue={submission.content.preferredName} placeholder="Preferred First Name" />
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="streetAddress">Street Address</label>
                                            <input type="text" className="form-control" id="streetAddress" name="streetAddress" readOnly defaultValue={submission.content.streetAddress}/>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="city">City</label>
                                            <input type="text" className="form-control" id="city" name="city" readOnly defaultValue={submission.content.city}/>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="province">Province</label>
                                            <select id="province" className="form-control" name="province" readOnly defaultValue={submission.content.province}>
                                                <option value="">Province</option>
                                                <option>Alberta</option>
                                                <option>British Columbia</option>
                                                <option>Manitoba</option>
                                                <option>New Brunswick</option>
                                                <option>Newfoundland and Labrador</option>
                                                <option>Northwest Territories</option>
                                                <option>Nova Scotia</option>
                                                <option>Nunavut</option>
                                                <option>Ontario</option>
                                                <option>Prince Edward Island</option>
                                                <option>Quebec</option>
                                                <option>Saskatchewan</option>
                                                <option>Yukon</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="postalCode">Postal Code</label>
                                            <input type="text" className="form-control" id="postalCode" name="postalCode" readOnly defaultValue={submission.content.postalCode}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="primaryPhoneNumber">Primary Phone Number</label>
                                            <input type="text" className="form-control" id="primaryPhoneNumber" name="primaryPhoneNumber" readOnly defaultValue={submission.content.primaryPhoneNumber}/>
                                        </div>
                                        <div className="form-group col-md-1">
                                            <label htmlFor="primaryPhoneNumber_voicemail">Voicemail?</label>
                                            <select id="primaryPhoneNumber_voicemail" className="form-control" name="primaryPhoneNumber_voicemail" readOnly defaultValue={submission.content.primaryPhoneNumber_voicemail}>
                                                <option value="">--</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="secondaryPhoneNumber">Secondary Phone Number</label>
                                            <input type="text" className="form-control" id="secondaryPhoneNumber" name="secondaryPhoneNumber" readOnly defaultValue={submission.content.secondaryPhoneNumber}/>
                                        </div>
                                        <div className="form-group col-md-1">
                                            <label htmlFor="secondaryPhoneNumber_voicemail">Voicemail?</label>
                                            <select id="secondaryPhoneNumber_voicemail" className="form-control" name="secondaryPhoneNumber_voicemail" readOnly defaultValue={submission.content.secondaryPhoneNumber_voicemail}>
                                                <option value="">--</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" className="form-control" id="email" name="email" readOnly defaultValue={submission.content.email} placeholder="name@example.com" />

                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="confirmEmail">Confirm Email</label>
                                            <input type="email" className="form-control" id="confirmEmail" name="confirmEmail" readOnly defaultValue={submission.content.confirmEmail} placeholder="name@example.com" />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="birthDate">Date of Birth</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fa fa-calendar tx-16 lh-0 op-6"></i>
                                                </div>
                                            </div>
                                            <input name="birthDate" id="birthDate" readOnly defaultValue={submission.content.birthDate} type="text" className="form-control" placeholder="MM/DD/YYYY" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-2">
                                            <label htmlFor="gender">Gender</label>
                                            <select id="gender" className="form-control" name="gender" readOnly defaultValue={submission.content.gender}>
                                                <option value="">--</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Prefer not to disclose</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="countryOfOrigin">Country of Origin</label>
                                            <select id="countryOfOrigin" className="form-control" name="countryOfOrigin" readOnly defaultValue={submission.content.countryOfOrigin}>
                                                <option value="">--</option>
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                                <option>Andorra</option>
                                                <option>Angola</option>
                                                <option>Antigua and Barbuda</option>
                                                <option>Argentina</option>
                                                <option>Armenia</option>
                                                <option>Australia</option>
                                                <option>Austria</option>
                                                <option>Azerbaijan</option>
                                                <option>The Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                                <option>Belarus</option>
                                                <option>Belgium</option>
                                                <option>Belize</option>
                                                <option>Benin</option>
                                                <option>Bhutan</option>
                                                <option>Bolivia</option>
                                                <option>Bosnia and Herzegovina</option>
                                                <option>Botswana</option>
                                                <option>Brazil</option>
                                                <option>Brunei</option>
                                                <option>Bulgaria</option>
                                                <option>Burkina Faso</option>
                                                <option>Burundi</option>
                                                <option>Cabo Verde</option>
                                                <option>Cambodia</option>
                                                <option>Cameroon</option>
                                                <option>Canada</option>
                                                <option>Central African Republic</option>
                                                <option>Chad</option>
                                                <option>Chile</option>
                                                <option>China</option>
                                                <option>Colombia</option>
                                                <option>Comoros</option>
                                                <option>Congo, Democratic Republic of the</option>
                                                <option>Congo, Republic of the</option>
                                                <option>Costa Rica</option>
                                                <option>Côte d’Ivoire</option>
                                                <option>Croatia</option>
                                                <option>Cuba</option>
                                                <option>Cyprus</option>
                                                <option>Czech Republic</option>
                                                <option>D</option>
                                                <option>Denmark</option>
                                                <option>Djibouti</option>
                                                <option>Dominica</option>
                                                <option>Dominican Republic</option>
                                                <option>East Timor (Timor-Leste)</option>
                                                <option>Ecuador</option>
                                                <option>Egypt</option>
                                                <option>El Salvador</option>
                                                <option>Equatorial Guinea</option>
                                                <option>Eritrea</option>
                                                <option>Estonia</option>
                                                <option>Ethiopia</option>
                                                <option>Fiji</option>
                                                <option>Finland</option>
                                                <option>France</option>
                                                <option>Gabon</option>
                                                <option>The Gambia</option>
                                                <option>Georgia</option>
                                                <option>Germany</option>
                                                <option>Ghana</option>
                                                <option>Greece</option>
                                                <option>Grenada</option>
                                                <option>Guatemala</option>
                                                <option>Guinea</option>
                                                <option>Guinea-Bissau</option>
                                                <option>Guyana</option>
                                                <option>Haiti</option>
                                                <option>Honduras</option>
                                                <option>Hungary</option>
                                                <option>Iceland</option>
                                                <option>India</option>
                                                <option>Indonesia</option>
                                                <option>Iran</option>
                                                <option>Iraq</option>
                                                <option>Ireland</option>
                                                <option>Israel</option>
                                                <option>Italy</option>
                                                <option>Jamaica</option>
                                                <option>Japan</option>
                                                <option>Jordan</option>
                                                <option>Kazakhstan</option>
                                                <option>Kenya</option>
                                                <option>Kiribati</option>
                                                <option>Korea, North</option>
                                                <option>Korea, South</option>
                                                <option>Kosovo</option>
                                                <option>Kuwait</option>
                                                <option>Kyrgyzstan</option>
                                                <option>Laos</option>
                                                <option>Latvia</option>
                                                <option>Lebanon</option>
                                                <option>Lesotho</option>
                                                <option>Liberia</option>
                                                <option>Libya</option>
                                                <option>Liechtenstein</option>
                                                <option>Lithuania</option>
                                                <option>Luxembourg</option>
                                                <option>Macedonia</option>
                                                <option>Madagascar</option>
                                                <option>Malawi</option>
                                                <option>Malaysia</option>
                                                <option>Maldives</option>
                                                <option>Mali</option>
                                                <option>Malta</option>
                                                <option>Marshall Islands</option>
                                                <option>Mauritania</option>
                                                <option>Mauritius</option>
                                                <option>Mexico</option>
                                                <option>Micronesia, Federated States of</option>
                                                <option>Moldova</option>
                                                <option>Monaco</option>
                                                <option>Mongolia</option>
                                                <option>Montenegro</option>
                                                <option>Morocco</option>
                                                <option>Mozambique</option>
                                                <option>Myanmar (Burma)</option>
                                                <option>Namibia</option>
                                                <option>Nauru</option>
                                                <option>Nepal</option>
                                                <option>Netherlands</option>
                                                <option>New Zealand</option>
                                                <option>Nicaragua</option>
                                                <option>Niger</option>
                                                <option>Nigeria</option>
                                                <option>Norway</option>
                                                <option>Oman</option>
                                                <option>Pakistan</option>
                                                <option>Palau</option>
                                                <option>Palestine</option>
                                                <option>Panama</option>
                                                <option>Papua New Guinea</option>
                                                <option>Paraguay</option>
                                                <option>Peru</option>
                                                <option>Philippines</option>
                                                <option>Poland</option>
                                                <option>Portugal</option>
                                                <option>Qatar</option>
                                                <option>Romania</option>
                                                <option>Russia</option>
                                                <option>Rwanda</option>
                                                <option>Saint Kitts and Nevis</option>
                                                <option>Saint Lucia</option>
                                                <option>Saint Vincent and the Grenadines</option>
                                                <option>Samoa</option>
                                                <option>San Marino</option>
                                                <option>Sao Tome and Principe</option>
                                                <option>Saudi Arabia</option>
                                                <option>Senegal</option>
                                                <option>Serbia</option>
                                                <option>Seychelles</option>
                                                <option>Sierra Leone</option>
                                                <option>Singapore</option>
                                                <option>Slovakia</option>
                                                <option>Slovenia</option>
                                                <option>Solomon Islands</option>
                                                <option>Somalia</option>
                                                <option>South Africa</option>
                                                <option>Spain</option>
                                                <option>Sri Lanka</option>
                                                <option>Sudan</option>
                                                <option>Sudan, South</option>
                                                <option>Suriname</option>
                                                <option>Swaziland</option>
                                                <option>Sweden</option>
                                                <option>Switzerland</option>
                                                <option>Syria</option>
                                                <option>Taiwan</option>
                                                <option>Tajikistan</option>
                                                <option>Tanzania</option>
                                                <option>Thailand</option>
                                                <option>Togo</option>
                                                <option>Tonga</option>
                                                <option>Trinidad and Tobago</option>
                                                <option>Tunisia</option>
                                                <option>Turkey</option>
                                                <option>Turkmenistan</option>
                                                <option>Tuvalu</option>
                                                <option>Uganda</option>
                                                <option>Ukraine</option>
                                                <option>United Arab Emirates</option>
                                                <option>United Kingdom</option>
                                                <option>United States</option>
                                                <option>Uruguay</option>
                                                <option>Uzbekistan</option>
                                                <option>Vanuatu</option>
                                                <option>Vatican City</option>
                                                <option>Venezuela</option>
                                                <option>Vietnam</option>
                                                <option>Yemen</option>
                                                <option>Zambia</option>
                                                <option>Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="nationality">Nationality</label>
                                            <select id="nationality" className="form-control" name="nationality" readOnly defaultValue={submission.content.nationality}>
                                                <option value="">--</option>
                                                <option>Afghanistan</option>
                                                <option>Albania</option>
                                                <option>Algeria</option>
                                                <option>Andorra</option>
                                                <option>Angola</option>
                                                <option>Antigua and Barbuda</option>
                                                <option>Argentina</option>
                                                <option>Armenia</option>
                                                <option>Australia</option>
                                                <option>Austria</option>
                                                <option>Azerbaijan</option>
                                                <option>The Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                                <option>Belarus</option>
                                                <option>Belgium</option>
                                                <option>Belize</option>
                                                <option>Benin</option>
                                                <option>Bhutan</option>
                                                <option>Bolivia</option>
                                                <option>Bosnia and Herzegovina</option>
                                                <option>Botswana</option>
                                                <option>Brazil</option>
                                                <option>Brunei</option>
                                                <option>Bulgaria</option>
                                                <option>Burkina Faso</option>
                                                <option>Burundi</option>
                                                <option>Cabo Verde</option>
                                                <option>Cambodia</option>
                                                <option>Cameroon</option>
                                                <option>Canada</option>
                                                <option>Central African Republic</option>
                                                <option>Chad</option>
                                                <option>Chile</option>
                                                <option>China</option>
                                                <option>Colombia</option>
                                                <option>Comoros</option>
                                                <option>Congo, Democratic Republic of the</option>
                                                <option>Congo, Republic of the</option>
                                                <option>Costa Rica</option>
                                                <option>Côte d’Ivoire</option>
                                                <option>Croatia</option>
                                                <option>Cuba</option>
                                                <option>Cyprus</option>
                                                <option>Czech Republic</option>
                                                <option>D</option>
                                                <option>Denmark</option>
                                                <option>Djibouti</option>
                                                <option>Dominica</option>
                                                <option>Dominican Republic</option>
                                                <option>East Timor (Timor-Leste)</option>
                                                <option>Ecuador</option>
                                                <option>Egypt</option>
                                                <option>El Salvador</option>
                                                <option>Equatorial Guinea</option>
                                                <option>Eritrea</option>
                                                <option>Estonia</option>
                                                <option>Ethiopia</option>
                                                <option>Fiji</option>
                                                <option>Finland</option>
                                                <option>France</option>
                                                <option>Gabon</option>
                                                <option>The Gambia</option>
                                                <option>Georgia</option>
                                                <option>Germany</option>
                                                <option>Ghana</option>
                                                <option>Greece</option>
                                                <option>Grenada</option>
                                                <option>Guatemala</option>
                                                <option>Guinea</option>
                                                <option>Guinea-Bissau</option>
                                                <option>Guyana</option>
                                                <option>Haiti</option>
                                                <option>Honduras</option>
                                                <option>Hungary</option>
                                                <option>Iceland</option>
                                                <option>India</option>
                                                <option>Indonesia</option>
                                                <option>Iran</option>
                                                <option>Iraq</option>
                                                <option>Ireland</option>
                                                <option>Israel</option>
                                                <option>Italy</option>
                                                <option>Jamaica</option>
                                                <option>Japan</option>
                                                <option>Jordan</option>
                                                <option>Kazakhstan</option>
                                                <option>Kenya</option>
                                                <option>Kiribati</option>
                                                <option>Korea, North</option>
                                                <option>Korea, South</option>
                                                <option>Kosovo</option>
                                                <option>Kuwait</option>
                                                <option>Kyrgyzstan</option>
                                                <option>Laos</option>
                                                <option>Latvia</option>
                                                <option>Lebanon</option>
                                                <option>Lesotho</option>
                                                <option>Liberia</option>
                                                <option>Libya</option>
                                                <option>Liechtenstein</option>
                                                <option>Lithuania</option>
                                                <option>Luxembourg</option>
                                                <option>Macedonia</option>
                                                <option>Madagascar</option>
                                                <option>Malawi</option>
                                                <option>Malaysia</option>
                                                <option>Maldives</option>
                                                <option>Mali</option>
                                                <option>Malta</option>
                                                <option>Marshall Islands</option>
                                                <option>Mauritania</option>
                                                <option>Mauritius</option>
                                                <option>Mexico</option>
                                                <option>Micronesia, Federated States of</option>
                                                <option>Moldova</option>
                                                <option>Monaco</option>
                                                <option>Mongolia</option>
                                                <option>Montenegro</option>
                                                <option>Morocco</option>
                                                <option>Mozambique</option>
                                                <option>Myanmar (Burma)</option>
                                                <option>Namibia</option>
                                                <option>Nauru</option>
                                                <option>Nepal</option>
                                                <option>Netherlands</option>
                                                <option>New Zealand</option>
                                                <option>Nicaragua</option>
                                                <option>Niger</option>
                                                <option>Nigeria</option>
                                                <option>Norway</option>
                                                <option>Oman</option>
                                                <option>Pakistan</option>
                                                <option>Palau</option>
                                                <option>Palestine</option>
                                                <option>Panama</option>
                                                <option>Papua New Guinea</option>
                                                <option>Paraguay</option>
                                                <option>Peru</option>
                                                <option>Philippines</option>
                                                <option>Poland</option>
                                                <option>Portugal</option>
                                                <option>Qatar</option>
                                                <option>Romania</option>
                                                <option>Russia</option>
                                                <option>Rwanda</option>
                                                <option>Saint Kitts and Nevis</option>
                                                <option>Saint Lucia</option>
                                                <option>Saint Vincent and the Grenadines</option>
                                                <option>Samoa</option>
                                                <option>San Marino</option>
                                                <option>Sao Tome and Principe</option>
                                                <option>Saudi Arabia</option>
                                                <option>Senegal</option>
                                                <option>Serbia</option>
                                                <option>Seychelles</option>
                                                <option>Sierra Leone</option>
                                                <option>Singapore</option>
                                                <option>Slovakia</option>
                                                <option>Slovenia</option>
                                                <option>Solomon Islands</option>
                                                <option>Somalia</option>
                                                <option>South Africa</option>
                                                <option>Spain</option>
                                                <option>Sri Lanka</option>
                                                <option>Sudan</option>
                                                <option>Sudan, South</option>
                                                <option>Suriname</option>
                                                <option>Swaziland</option>
                                                <option>Sweden</option>
                                                <option>Switzerland</option>
                                                <option>Syria</option>
                                                <option>Taiwan</option>
                                                <option>Tajikistan</option>
                                                <option>Tanzania</option>
                                                <option>Thailand</option>
                                                <option>Togo</option>
                                                <option>Tonga</option>
                                                <option>Trinidad and Tobago</option>
                                                <option>Tunisia</option>
                                                <option>Turkey</option>
                                                <option>Turkmenistan</option>
                                                <option>Tuvalu</option>
                                                <option>Uganda</option>
                                                <option>Ukraine</option>
                                                <option>United Arab Emirates</option>
                                                <option>United Kingdom</option>
                                                <option>United States</option>
                                                <option>Uruguay</option>
                                                <option>Uzbekistan</option>
                                                <option>Vanuatu</option>
                                                <option>Vatican City</option>
                                                <option>Venezuela</option>
                                                <option>Vietnam</option>
                                                <option>Yemen</option>
                                                <option>Zambia</option>
                                                <option>Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <label htmlFor="nativeLanguage">Native Language</label>
                                            <select id="nativeLanguage" className="form-control" name="nativeLanguage" readOnly defaultValue={submission.content.nativeLanguage}>
                                                <option value="">--</option>
                                                <option>Arabic</option>
                                                <option>Bengali</option>
                                                <option>Chinese</option>
                                                <option>English</option>
                                                <option>Hindi</option>
                                                <option>Japanese</option>
                                                <option>Portuguese</option>
                                                <option>Russian</option>
                                                <option>Spanish</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>


                                <h3>Profession & Education</h3>
                                <section>
                                    <div className="form-row">
                                        <div className="form-group col-md-7">
                                            <label htmlFor="occupation">
                                                Please select your professional occupation or field from the selection below
                                            </label>
                                            <select className="form-control" id="occupation" name="occupation" readOnly defaultValue={submission.content.occupation}>
                                                <option value="">--</option>
                                                <option>Management</option>
                                                <option>Business, Finance & Administration</option>
                                                <option>Natural & Applied Sciences and Related Technical Jobs</option>
                                                <option>Health Occupations</option>
                                                <option>Education, Law, Social, Community & Government Services</option>
                                                <option>Art, Culture, Recreation, Sports</option>
                                                <option> Trades, Transport, Equipment Operators and Related Jobs</option>
                                                <option>Sales and Service Occupations</option>
                                                <option>Natural Resources, Agriculture and Related Jobs</option>
                                                <option>Manufacturing and Utilities Jobs</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-5">
                                            <label htmlFor="occupation_other">If Other, Specify</label>
                                            <input type="email" className="form-control" id="occupation_other" name="occupation_other" readOnly defaultValue={submission.content.occupation_other}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="primaryOccupation">Name of Primary Profession</label>
                                            <input type="text" className="form-control" id="primaryOccupation" name="primaryOccupation" readOnly defaultValue={submission.content.primaryOccupation}/>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <div className="row">
                                                <label className="col-form-label col-sm-4 text-md-left pt-sm-0">Is this a
                                          regulated profession?</label>
                                                <div className="col">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control custom-radio">
                                                            <input id="regulatedProfession_yes" name="regulatedProfession" readOnly checked={submission.content.regulatedProfession_yes} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Yes</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="regulatedProfession_no" name="regulatedProfession" readOnly checked={submission.content.regulatedProfession_no} type="radio" className="custom-control-input" />
                                                            <span className="custom-control-label">No</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="regulatedProfession_unknown" name="regulatedProfession" readOnly checked={submission.content.regulatedProfession_unknown} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Unknown</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <label className="col-form-label col-sm-4 text-md-left pt-sm-0">Are you licensed
                                          to practice in Canada ?</label>
                                        <div className="col">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control custom-radio">
                                                    <input id="licensed_yes" name="licensed" readOnly checked={submission.content.licensed_yes} type="radio" className="custom-control-input"
                                                         />
                                                    <span className="custom-control-label">Yes</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="licensed_no" name="licensed" readOnly checked={submission.content.licensed_no} type="radio" className="custom-control-input" />
                                                    <span className="custom-control-label">No</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="licensed_inProgress" name="licensed" readOnly checked={submission.content.licensed_inProgress} type="radio" className="custom-control-input"
                                                         />
                                                    <span className="custom-control-label">Licensing in Progress</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="licensed_unknown" name="licensed" readOnly checked={submission.content.licensed_unknown} type="radio" className="custom-control-input"
                                                         />
                                                    <span className="custom-control-label">Unknown</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="licensed_na" name="licensed" readOnly checked={submission.content.licensed_na} type="radio" className="custom-control-input"
                                                         />
                                                    <span className="custom-control-label">N/A</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="degree">
                                                Please select your highest level of education
                                  </label>
                                            <select className="form-control" id="degree" name="degree" readOnly defaultValue={submission.content.degree}>
                                                <option value="">--</option>
                                                <option value="phD">PhD</option>
                                                <option value="masters">Masters</option>
                                                <option value="bachelor">Bachelor</option>
                                                <option value="certificate">Certificate</option>
                                                <option value="diploma">Diploma</option>
                                                <option value="highSchool">High School</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="degree_other">If Other, Specify</label>
                                            <input type="email" className="form-control" id="degree_other" name="degree_other" readOnly defaultValue={submission.content.degree_other}/>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="fieldOfStudy">
                                                What is your field of study?
                              </label>
                                            <select className="form-control" id="fieldOfStudy" name="fieldOfStudy" readOnly defaultValue={submission.content.fieldOfStudy}>
                                                <option value="">--</option>
                                                <option>Education (e.g. teacher training)</option>
                                                <option>Visual & performing arts (e.g. music, art)</option>
                                                <option>Humanities (e.g. literature, religion)</option>
                                                <option>Social & Behavioural Sciences (e.g. law, economics, journalism)</option>
                                                <option>Business, Management, & Public Administration (e.g. finance)</option>
                                                <option>Physical & Life Sciences (e.g. geology, biology, science technology)</option>
                                                <option>Math, IT/computer science, library science </option>
                                                <option>Architecture & Engineering (incl. construction, mechanical repair)</option>
                                                <option> Agriculture, environment & resources</option>
                                                <option>Health & Fitness (e.g. medicine, dental, veterinary, recreation)</option>
                                                <option>Other (e.g. interdisciplinary program)</option>
                                                <option>Personal, Protection, Transport Services (e.g. culinary, military)</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="nameOfMajor">Name of your major, field of study, or specialization:</label>
                                            <input type="text" className="form-control" id="nameOfMajor" name="nameOfMajor" readOnly defaultValue={submission.content.nameOfMajor}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label className="col-form-label col-sm-4 text-md-left pt-sm-0">Do you have post-secondary education outside of Canada?</label>
                                        <div className="col">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control custom-radio">
                                                    <input id="postSecondaryOutsideCanada_yesSame" name="postSecondaryOutsideCanada" readOnly checked={submission.content.postSecondaryOutsideCanada_yesSame} type="radio" className="custom-control-input"
                                                         />
                                                    <span className="custom-control-label">YES (same as above)</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="postSecondaryOutsideCanada_yesOther" name="postSecondaryOutsideCanada" readOnly checked={submission.content.postSecondaryOutsideCanada_yesOther} type="radio" className="custom-control-input" />
                                                    <span className="custom-control-label">YES (other)</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="postSecondaryOutsideCanada_no" name="postSecondaryOutsideCanada" readOnly checked={submission.content.postSecondaryOutsideCanada_no} type="radio" className="custom-control-input" />
                                                    <span className="custom-control-label">NO</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label className="col-form-label col-sm-6 text-md-left pt-sm-0">Have you had the above degree(s) evaluated in Canada?</label>
                                        <div className="col">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control custom-radio">
                                                    <input id="degreeEvaluated_yes" name="degreeEvaluated" readOnly checked={submission.content.degreeEvaluated_yes} type="radio" className="custom-control-input"
                                                         />
                                                    <span className="custom-control-label">YES</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="degreeEvaluated_no" name="degreeEvaluated" readOnly checked={submission.content.degreeEvaluated_no} type="radio" className="custom-control-input" />
                                                    <span className="custom-control-label">NO</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="degreeEvaluated_na" name="degreeEvaluated" readOnly checked={submission.content.degreeEvaluated_na} type="radio" className="custom-control-input" />
                                                    <span className="custom-control-label">N/A</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="degreeEvaluated_inProgress" name="degreeEvaluated" readOnly checked={submission.content.degreeEvaluated_inProgress} type="radio" className="custom-control-input" />
                                                    <span className="custom-control-label">In progress</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <label className="col-form-label col-sm-6 text-md-left pt-sm-0">Do you have Federal Government security clearance?</label>
                                        <div className="col">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control custom-radio">
                                                    <input id="securityClearance_yes" name="securityClearance" readOnly checked={submission.content.securityClearance_yes} type="radio" className="custom-control-input"
                                                         />
                                                    <span className="custom-control-label">YES</span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input id="securityClearance_no" name="securityClearance" readOnly checked={submission.content.securityClearance_no} type="radio" className="custom-control-input" />
                                                    <span className="custom-control-label">NO</span>
                                                </label>

                                            </div>
                                        </div>
                                    </div>


                                </section>

                                <h3>Immigration Status</h3>
                                <section>
                                    <div className="form-row">
                                        <div className="form-group col-md-3">
                                            <label htmlFor="foreignBornCanadian">Foreign born Canadian?</label>
                                            <select className="form-control" id="foreignBornCanadian" name="foreignBornCanadian" readOnly defaultValue={submission.content.foreignBornCanadian}>
                                                <option value="">--</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="landingDate_citizen">Date of Landing</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fa fa-calendar tx-16 lh-0 op-6"></i>
                                                    </div>
                                                </div>
                                                <input name="landingDate_citizen" id="landingDate_citizen" readOnly defaultValue={submission.content.landingDate_citizen} type="text" className="form-control" placeholder="MM/DD/YYYY" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="yearOfCitizenship">Year of Citizenship</label>
                                            <select className="form-control" id="yearOfCitizenship" name="yearOfCitizenship" readOnly defaultValue={submission.content.yearOfCitizenship}>
                                                <option value="">--</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                                <option>2014</option>
                                                <option>2013</option>
                                                <option>2012</option>
                                                <option>2011</option>
                                                <option>2010</option>
                                                <option>2009</option>
                                                <option>2008</option>
                                                <option>2007</option>
                                                <option>2006</option>
                                                <option>2005</option>
                                                <option>2004</option>
                                                <option>2003</option>
                                                <option>2002</option>
                                                <option>2001</option>
                                                <option>2000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h5>OR</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="permanentResidencyClass">Permanent Residence Class</label>
                                            <select className="form-control" id="permanentResidencyClass" name="permanentResidencyClass" readOnly defaultValue={submission.content.permanentResidencyClass}>
                                                <option value="">--</option>
                                                <option>Skilled Worker</option>
                                                <option>Family Class</option>
                                                <option>Refuge Class</option>
                                                <option>Live-in-Caregiver</option>
                                                <option>Economic Class</option>
                                                <option>Approved in principle</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label htmlFor="landingDate_permanentResident">Date of Landing</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <i className="fa fa-calendar tx-16 lh-0 op-6"></i>
                                                    </div>
                                                </div>
                                                <input name="landingDate_permanentResident" id="landingDate_permanentResident" readOnly defaultValue={submission.content.landingDate_permanentResident} type="text" className="form-control" placeholder="MM/DD/YYYY" />
                                            </div>
                                        </div>
                                    </div>
                                    <h5>OR</h5>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="conventionRefuge">Are you A Convention Refuge?</label>
                                            <select className="form-control" id="conventionRefuge" name="conventionRefuge" readOnly defaultValue={submission.content.conventionRefuge}>
                                                <option value="">--</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h5>OR</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <div className="row">
                                                <label className="col-form-label col-sm-4 text-md-left pt-sm-0">Temporary Resident with Work Permit:</label>
                                                <div className="col">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_inlandRefugeeClaimant" name="temporaryResident" readOnly checked={submission.content.temporaryResident_inlandRefugeeClaimant} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Inland Refugee Claimant</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_foreignWorker" name="temporaryResident" readOnly checked={submission.content.temporaryResident_foreignWorker} type="radio" className="custom-control-input" />
                                                            <span className="custom-control-label">Temporary Foreign Worker (Employer Sponsored)</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_liveInCaregiver" name="temporaryResident" readOnly checked={submission.content.temporaryResident_liveInCaregiver} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Live-In Caregiver</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_protectedResident" name="temporaryResident" readOnly checked={submission.content.temporaryResident_protectedResident} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Temporary Protected Resident</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_student" name="temporaryResident" readOnly checked={submission.content.temporaryResident_student} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Student or Graduate Work Permit</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_other" name="temporaryResident" readOnly checked={submission.content.temporaryResident_other} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Other</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_diplomat" name="temporaryResident" readOnly checked={submission.content.temporaryResident_diplomat} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Diplomat</span>
                                                        </label>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>OR</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <div className="row">
                                                <label className="col-form-label col-sm-4 text-md-left pt-sm-0">Temporary Resident with No Work Permit:</label>
                                                <div className="col">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_noWorkPermit_inlandRefugee" name="temporaryResident_noWorkPermit" readOnly checked={submission.content.temporaryResident_noWorkPermit_inlandRefugee} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Inland Refugee Claimant</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_noWorkPermit_internationalStudent" name="temporaryResident_noWorkPermit" readOnly checked={submission.content.temporaryResident_noWorkPermit_internationalStudent} type="radio" className="custom-control-input" />
                                                            <span className="custom-control-label">International Student</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_noWorkPermit_visitorVisa" name="temporaryResident_noWorkPermit" readOnly checked={submission.content.temporaryResident_noWorkPermit_visitorVisa} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Visitor Visa</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_noWorkPermit_diplomat" name="temporaryResident_noWorkPermit" readOnly checked={submission.content.temporaryResident_noWorkPermit_diplomat} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Diplomat</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="temporaryResident_noWorkPermit_other" name="temporaryResident_noWorkPermit" readOnly checked={submission.content.temporaryResident_noWorkPermit_other} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">Other</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label htmlFor="immigrationStatus_other">If Other, Specify</label>
                                            <input type="email" className="form-control" id="immigrationStatus_other" name="immigrationStatus_other" readOnly defaultValue={submission.content.immigrationStatus_other}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label htmlFor="immigrationDocumentNumber">Immigration Document Number:</label>
                                            <input type="email" className="form-control" id="immigrationDocumentNumber" name="immigrationDocumentNumber" readOnly defaultValue={submission.content.immigrationDocumentNumber}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="periodInCanada">How long have you been in Canada?</label>
                                            <select className="form-control" id="periodInCanada" name="periodInCanada" readOnly defaultValue={submission.content.periodInCanada}>
                                                <option value="">--</option>
                                                <option>0-12 months</option>
                                                <option>1-3 years</option>
                                                <option>3+ years</option>
                                            </select>
                                        </div>
                                    </div>
                                </section>

                                <h3>Other</h3>
                                <section>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <div className="row">
                                                <label className="col-form-label col-sm-4 text-md-left pt-sm-0">Are you legally entitled to work in Canada:</label>
                                                <div className="col">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control custom-radio">
                                                            <input id="legallyWorkInCanada_yes" name="legallyWorkInCanada" readOnly checked={submission.content.legallyWorkInCanada_yes} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">YES</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="legallyWorkInCanada_no" name="legallyWorkInCanada" readOnly checked={submission.content.legallyWorkInCanada_no} type="radio" className="custom-control-input" />
                                                            <span className="custom-control-label">NO</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="legallyWorkInCanada_unknown" name="legallyWorkInCanada" readOnly checked={submission.content.legallyWorkInCanada_unknown} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">UNKNOWN</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="heardAboutUs">How did you hear about World Skills Employment Centre?</label>
                                            <select className="form-control" id="heardAboutUs" name="heardAboutUs" readOnly defaultValue={submission.content.heardAboutUs}>
                                                <option value="">--</option>
                                                <option>Immigrant serving organization (CCI, IWSO, JFS, OCCSC, SCFS, OCISO, LASSA, YMCA, PQHC, YSB etc.)</option>
                                                <option>Reception House</option>
                                                <option>Employment Ontario</option>
                                                <option>LINC/CLIC or ESL / FSL classes</option>
                                                <option>LARC</option>
                                                <option>ELT and OSLT classes</option>
                                                <option>Internet, fliers, promotion</option>
                                                <option>Libraries and schools</option>
                                                <option>Training</option>
                                                <option>Friends and family</option>
                                                <option>Ontario Works</option>
                                                <option>Government of Canada website</option>
                                                <option>Recruiting agency</option>
                                                <option> Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="heardAboutUs_other">If Other, Specify</label>
                                            <input type="email" className="form-control" id="heardAboutUs_other" name="heardAboutUs_other" readOnly defaultValue={submission.content.heardAboutUs_other}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <div className="row">
                                                <label className="col-form-label text-md-left pt-sm-0">Would you like to be placed on our email distribution list?</label>
                                                <div className="col">
                                                    <div className="custom-controls-stacked">
                                                        <label className="custom-control custom-radio">
                                                            <input id="addEmailToDistributionList_yes" name="addEmailToDistributionList" readOnly checked={submission.content.addEmailToDistributionList_yes} type="radio" className="custom-control-input"
                                                                 />
                                                            <span className="custom-control-label">YES</span>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input id="addEmailToDistributionList_no" name="addEmailToDistributionList" readOnly checked={submission.content.addEmailToDistributionList_no} type="radio" className="custom-control-input" />
                                                            <span className="custom-control-label">NO</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="sourceOfIncome">Source of income (optional):</label>
                                                <select className="form-control" id="sourceOfIncome" name="sourceOfIncome" readOnly defaultValue={submission.content.sourceOfIncome}>
                                                    <option value="">--</option>
                                                    <option>EI</option>
                                                    <option>ODSP</option>
                                                    <option>Ontario Works</option>
                                                    <option>GARs</option>
                                                    <option>LARC</option>
                                                    <option>Family</option>
                                                    <option>Self-employed</option>
                                                    <option>Work</option>
                                                    <option>Savings</option>
                                                    <option>Prefer not to answer</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="sourceOfIncome_other">If Other, Specify</label>
                                                <input type="email" className="form-control" id="sourceOfIncome_other" name="sourceOfIncome_other" readOnly defaultValue={submission.content.sourceOfIncome_other}/>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </form>

                    </div>
       
                </div>
            </div>
        )
    }
}

export default connect()(RegistrationSubmission)