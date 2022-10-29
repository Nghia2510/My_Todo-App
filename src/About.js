import React  from 'react'
// import * as FaIcons from "react-icons/fa";
import logo from '../src/img/avatar1.jpg';
// import { IconName } from "react-icons/go";
export const About = () => {

    return (
        <React.Fragment>
        <section>
        <div class="main-left">
            <div class="main-profile"> 
                <img  src={logo} alt="profile-pic"/>
                <p class="name">Phạm Vương Nghĩa</p>
            </div>
            <div class="main-content">
                <div class="contact-icon">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100010906294241"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                            
                        </li>
                        <li>
                            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fnghia6891%3Ffbclid%3DIwAR0t5UX49s6YJa1_m9hAPlE5Ct_xM5oCKR-F5pvgDW6lr8hNjDa5dK0zfA0&h=AT0A0vfj-GQo5zPuwHQ4PE7NjiYP5bE0Wnb6jFs7zglYQ_VF_wglx9_d2yye5Etg33BKbyFTnI6MJB8ooVnBQro3s3BV1YxPkG0utqzmxSxUplb91xbP-pLMAuvjsj6eUo7S"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                        </li>                          
                        <li>
                            <a href="https://github.com/Nghia2510"><i class="fab fa-github-alt" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="main-item main-infor">
                    <div class="title">
                        <p class="bold">Thông tin liên hệ</p>
                    </div>
                    <div class="contact">
                        <ul>
                            <li>
                                <div class="li_wrap">
                                    <div class="icon"><i class="fas fa-birthday-cake" aria-hidden="true"></i></div>
                                    <div class="text">25/10/2002</div>
                                </div>
                            </li>
                            <li>
                                <div class="li_wrap">
                                    <div class="icon"><i class=" fas fa-mobile-alt" aria-hidden="true"></i></div>
                                    <div class="text">0394199***</div>
                                </div>
                            </li>
                            <li>
                                <div class="li_wrap">
                                    <div class="icon"><i class="far fa-envelope" aria-hidden="true"></i></div>
                                    <div class="text no-upcase">vuongnghia92pku@gmail.com</div>
                                </div>
                            </li>
                            <li>
                                <div class="li_wrap">
                                    <div class="icon"><i class="fas fa-map-marked-alt" aria-hidden="true"></i></div>
                                    <div class="text">Pleiku, Gia Lai</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="main-item main-skills">
                    <div class="title">
                        <p class="bold">KỸ NĂNG</p>
                    </div>
						<ul>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fab fa-html5"></i></div>
									<div class="text">HTML</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fab fa-css3-alt"></i></div>
									<div class="text">CSS</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fab fa-js"></i></div>
									<div class="text">Javascript</div>
								</div>
							</li>
							<li>
								<div class="li_wrap">
									<div class="icon"><i class="fab fa-github-alt"></i></div>
									<div class="text">Github</div>
								</div>
							</li>
                            <li>
								<div class="li_wrap">
									<div class="icon"><i class="far fa-user"></i></div>
									<div class="text">Teamwork</div>
								</div>
							</li>
						</ul>
                        

                </div>
           
            </div>

        </div>
        </section>
        
        </React.Fragment>
    )
};