
import './Header.css';
import { Button } from "@mui/material";
//import React from "react";

function Header() {
    return (
        <>
            <div className="AppBar" style={{ boxShadow: "none" }}>
                <div className="Toolbar" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="Box" style={{ display: "flex", alignItems: "center" }}>
                        <div className="Box" style={{ display: "flex", alignItems: "center" }}>
                            <img src="" alt="Logo" />
                            <h2>Jobhuntly</h2>
                        </div>
                        <div className="Box" style={{ display: "flex", marginLeft: "6px", marginBottom: "3px" }}>
                            <div style={{ margin: "1px" }}><h2 style={{ fontSize: "1em" }}>Find Jobs</h2></div>
                            <div style={{ margin: "1px" }}><h2 style={{ fontSize: "1em" }}>Browse Companies</h2></div>
                        </div>
                    </div>
                    <div className="Box" style={{ display: "flex" }}>
                        <div style={{ marginRight: "8px" }}>
                            <button style={{ color: "blue" }}>Login</button>
                        </div>
                        <div>
                            <button style={{ color: "white", backgroundColor: "#4640DE"}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <p>Home /Companies /Nomad /Social Media Assistant</p>
            <div className="cadre">
                 <img src="src\assets\stripe\Company Logo.png" alt="Logo" className="logo" /> 
                <div className="main-content">
                    <p><strong>Social Media Assistant</strong></p>
                    <div>
                        <span>Stripe</span>
                        <span className="point">•</span>
                        <span>Paris, France</span>
                        <span className="point">•</span>
                        <span>Full-Time</span>
                    </div>
                </div>
                <Button sx={{ color: "#4640DE", backgroundColor: "#4640DE" }}>Apply</Button>
            </div>
            <div className="container">
                <div className="left-section">   
                    
                    <h2>Description</h2>
                    <p>
                        Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.
                    </p>
                    
                    <hr />

                    
                    <h2>Responsibilities</h2>
                    <ul>
                        <li>Drive community engagement to ensure active online presence and brand representation.</li>
                        <li>Focus on developing and publishing engaging social media content.</li>
                        <li>Support marketing and social media strategy.</li>
                        <li>Stay updated on social media platform trends and suggest content ideas to the team.</li>
                        <li>Interact with online communities and respond to inquiries.</li>
                    </ul>
                    
                    <hr />
                    
                    <h2>Who You Are</h2>
                    <ul>
                        <li>You get energy from people and building the ideal work environment</li>
                        <li>You have a sense for beautiful spaces and office experiences</li>
                        <li>You are a confident office manager, ready for added responsibilities</li>
                        <li>You're detail-oriented and creative</li>
                        <li>You're a growth marketer and know how to run campaigns.</li>
                    </ul>
                    

                     
                    <h2>Nice-To-Haves</h2>
                    <ul>
                        <li>Fluent in English</li>
                        <li>Project management skills</li>
                        <li>Copy editing skills.</li>
                    </ul>
                    
                </div>
    
                <div className="right-section">
                
                    
                        <h2>About this role</h2>
                        <p>Applied: 5 of 10 capacity</p>
                        <p>Apply Before: July 31, 2021</p>
                        <p>Job Posted On: Job Posted On</p>
                        <p>Job Type: Full-Time</p>
                        <p>Salary: $75k-$85k USD</p>
                    
                    <hr />
                    
                        
                        <h2>Categories</h2>
                        <p>Marketing&nbsp;&nbsp;Design</p>
                        
                        <hr />
                        
                        <h2>Required Skills</h2>
                        <p>Project Management&nbsp;&nbsp;&nbsp;Copywriting<br />Social Media Marketing&nbsp;&nbsp;&nbsp;English<br />Copy Editing</p>
                        
                    
                    
                </div>
            </div>
            
            <hr/>

            {/* <div className="benefits">
    <div className="Perks&Benefits">
        <h2>Perks & Benefits</h2>
        <p>This job comes with several perks and benefits</p>
        <div className="benefits-container"> 
            <div className="benefits-row">
                <div className="benefit-card">
                    <h2>Full Healthcare</h2>
                    <p>We believe in thriving communities and that starts with our team being happy and healthy.</p>
                </div>
                <div className="benefit-card">
                    <h2>Unlimited Vacation</h2>
                    <p>We believe you should have a flexible schedule that makes space for family, wellness, and fun. We offer unlimited vacation time so you can take breaks and recharge whenever you need.</p>
                </div>
                <div className="benefit-card">
                    <h2>Skill Development</h2>
                    <p>We believe in always learning and leveling up our skills. Whether it's a conference or online course.</p>
                </div>
                <div className="benefit-card">
                    <h2>Team Summits</h2>
                    <p>Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.</p>
                </div>
            </div>
            <div className="benefits-row">
                <div className="benefit-card">
                    <h2>Remote Working</h2>
                    <p>You know how you perform your best. Work from<br/><br/> home, coffee shop or anywhere when you feel like it.</p>
                </div>
                <div className="benefit-card">
                    <h2>Commuter Benefits</h2>
                    <p>We're grateful for all the time and<br/><br/> energy each team member puts<br/><br/> into getting to work<br/><br/> every day.</p>
                </div>
                <div className="benefit-card">
                    <h2>We Give Back</h2>
                    <p>We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most times two.</p>
                </div>
            </div>
        </div> 
    </div>
</div> */}
<div className="benefits">
    <div className="Perks&Benefits">
        <h2>Perks & Benefits</h2>
        <p>This job comes with several perks and benefits</p>
        <div className="benefits-container"> 
            <div className="benefits-row">
                <div className="benefit-card">
                    <h2>Full Healthcare</h2>
                    <p>We believe in thriving communities and that starts with our team being happy and healthy.</p>
                </div>
                <div className="benefit-card">
                    <h2>Unlimited Vacation</h2>
                    <p>We believe you should have a flexible schedule that makes space for family, wellness, and fun. We offer unlimited vacation time so you can take breaks and recharge whenever you need.</p>
                </div>
                <div className="benefit-card">
                    <h2>Skill Development</h2>
                    <p>We believe in always learning and leveling up our skills. Whether it's a conference or online course.</p>
                </div>
            
            
                <div className="benefit-card">
                    <h2>Team Summits</h2>
                    <p>Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.</p>
                </div>
            </div>
            <div className="benefits-row">
                <div className="benefit-card">
                    <h2>Remote Working</h2>
                    <p>You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.</p>
                </div>
                <div className="benefit-card">
                    <h2>Commuter Benefits</h2>
                    <p>We're grateful for all the time and energy each team member puts into getting to work every day.</p>
                </div>
            
            
                <div className="benefit-card">
                    <h2>We Give Back</h2>
                    <p>We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most times two.</p>
                </div>
            </div>
        </div> 
    </div>
</div>


            <hr />
            <div className="Stripe">
                <img src="src\assets\stripe\Company Logo.png"alt="Logo" className="logo" /> 
                <h2>Stripe</h2>
                <h4>Read more about Stripe <span className="arrow-container"><span className="arrow"></span></span></h4>
                    
                <p>Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size from new startups to public companies use our software to accept payments and manage their businesses online.</p>  
                    
            </div>
            <hr />
            <div className="similar-jobs-container"> 
                <h2>Similar Jobs <span className="arrow-container"><span className="arrow"></span></span></h2>
                <br/><br/><br/>
                    <div className="left-section2">
                        <div className="cadre2">
                            <div className="similar-jobs-card">
                                <img src="src\assets\nomad\Nomad.png"alt="Logo" className="logo" />
                                <h2>Social Media Assistant</h2>
                                <span>Nomad</span>
                                <span className="point">•</span>
                                <span>Paris, France</span>
                                <div className="similar-jobs-circles">
                                    <div className="circle green-circle"><span className="circle-content">Full-Time</span></div>
                                    <div className="circle orange-circle"><span className="circle-content">Marketing</span></div>
                                    <div className="circle blue-circle"><span className="circle-content">Design</span></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="cadre2">
                            <div className="similar-jobs-card">
                                <img src="chemin/vers/le/logo.png"alt="Logo" className="logo" />
                                <h2>Brand Designer</h2>
                                <span>Dropbox</span>
                                <span className="point">•</span>
                                <span>San Francisco, USA</span>
                                <div className="similar-jobs-circles">
                                    <div className="circle green-circle"><span className="circle-content">Full-Time</span></div>
                                    <div className="circle orange-circle"><span className="circle-content">Marketing</span></div>
                                    <div className="circle blue-circle"><span className="circle-content">Design</span></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="cadre2">
                            <div className="similar-jobs-card">
                                <img src="chemin/vers/le/logo.png"alt="Logo" className="logo" />
                                <h2>Interactive Developer</h2>
                                <span>Terraform</span>
                                <span className="point">•</span>
                                <span>Hamburg, Germany</span>
                                <div className="similar-jobs-circles">
                                    <div className="circle green-circle"><span className="circle-content">Full-Time</span></div>
                                    <div className="circle orange-circle"><span className="circle-content">Marketing</span></div>
                                    <div className="circle blue-circle"><span className="circle-content">Design</span></div>
                                </div>
                                
                            </div>
                        </div>
                        <br/>
                        <div className="cadre2">
                            <div className="similar-jobs-card">
                                <img src="\src\assets\paoker\Packer.png"alt="Logo" className="logo" />
                                <h2>Hr Manager</h2>
                                <span>Packer</span>
                                <span className="point">•</span>
                                <span>Lucern, Switzerland</span>
                                <div className="similar-jobs-circles">
                                    <div className="circle green-circle"><span className="circle-content">Full-Time</span></div>
                                    <div className="circle orange-circle"><span className="circle-content">Marketing</span></div>
                                    <div className="circle blue-circle"><span className="circle-content">Design</span></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="right-section2">
                        <div className="cadre2">
                            <div className="similar-jobs-card">
                                <img src="chemin/vers/le/logo.png"alt="Logo" className="logo" />
                                <h2>Social Media Assistant</h2>
                                <span>Netlify</span>
                                <span className="point">•</span>
                                <span>Paris, France</span>
                                <div className="similar-jobs-circles">
                                    <div className="circle green-circle"><span className="circle-content">Full-Time</span></div>
                                    <div className="circle orange-circle"><span className="circle-content">Marketing</span></div>
                                    <div className="circle blue-circle"><span className="circle-content">Design</span></div>
                                </div>
                            </div>                   
                        </div>
                        <br/>
                        <div className="cadre2">
                            <div className="similar-jobs-card">
                                <img src="\src\assets\maze\-7tuadqI_400x400.png"alt="Logo" className="logo" />
                                <h2>Brand Designer</h2>
                                <span>Maze</span>
                                <span className="point">•</span>
                                <span>San Francisco, USA</span>
                                <div className="similar-jobs-circles">
                                    <div className="circle green-circle"><span className="circle-content">Full-Time</span></div>
                                    <div className="circle orange-circle"><span className="circle-content">Marketing</span></div>
                                    <div className="circle blue-circle"><span className="circle-content">Design</span></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="cadre2">
                            <div className="similar-jobs-card">
                                <img src="src\assets\udacity\_1M3hz0d_400x400.png"alt="Logo" className="logo" />
                                <h2>Interactive Developer</h2>
                                <span>Udacity</span>
                                <span className="point">•</span>
                                <span>Hamburg, Germany</span>
                                <div className="similar-jobs-circles">
                                    <div className="circle green-circle"><span className="circle-content">Full-Time</span></div>
                                    <div className="circle orange-circle"><span className="circle-content">Marketing</span></div>
                                    <div className="circle blue-circle"><span className="circle-content">Design</span></div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="cadre2">
                            <div className="similar-jobs-card">
                                <img src="\src\assets\webflow\Mask Group.png"alt="Logo" className="logo" />
                                <h2>Hr Manager</h2>
                                <span>Webflow</span>
                                <span className="point">•</span>
                                <span>Lucern, Switzerland</span>
                                <div className="similar-jobs-circles">
                                    <div className="circle green-circle"><span className="circle-content">Full-Time</span></div>
                                    <div className="circle orange-circle"><span className="circle-content">Marketing</span></div>
                                    <div className="circle blue-circle"><span className="circle-content">Design</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            
        
         </>
    );
}

export default Header;
