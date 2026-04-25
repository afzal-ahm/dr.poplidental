


// ── FOOTER HTML ──────────────────────
const FOOTER = `
<style>
    .site-footer__top:empty {
        display: none;
    }

    .site-footer__middle {
        padding-bottom: 72px;
    }

    .footer-widget__map {
        margin-top: 24px;
    }

    .footer-widget__map-frame {
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        border-radius: 12px;
    }

    .footer-widget__map-frame iframe {
        display: block;
        width: 100%;
        height: 320px;
        border: 0;
    }

    @media (max-width: 1199px) {
        .site-footer__middle {
            padding-top: 40px;
            padding-bottom: 56px;
        }

        .footer-widget__map-frame iframe {
            height: 240px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        .site-footer__middle {
            padding-top: 34px;
            padding-bottom: 30px;
        }

        .footer-widget__Contact {
            margin-top: 12px;
        }

        .footer-widget__map {
            margin-top: 14px;
        }

        .footer-widget__map-frame iframe {
            height: 235px;
        }
    }

    @media (max-width: 767px) {
        .site-footer__middle {
            padding-top: 36px;
            padding-bottom: 44px;
        }

        .footer-widget__map-frame iframe {
            height: 220px;
        }
    }
</style>
<!-- <div class="site-footer__shape-1 float-bob-y">
                <img src="assets/images/resources/logo.jpg" alt="">
            </div> -->
            <div class="site-footer__top">

            </div>
            <div class="container">
                <div class="site-footer__middle">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div class="footer-widget__column footer-widget__about">
                                <div class="footer-widget__logo">
                                    <a href="index.html">
                                        <img src="assets/images/resources/logo-new.jpg"
                                            alt="Dr Popli’s Dental Clinic & Implant Centre" width="90px">
                                    </a>
                                </div>
                                <p class="footer-widget__about-text">
                                    Dr Popli’s Dental Clinic & Implant Centre is a trusted multi-specialty dental clinic
                                    dedicated to delivering advanced, compassionate, and personalized dental care for
                                    healthy and confident smiles.
                                </p>
                                <div class="footer-widget__social">
                                    <a href="https://www.facebook.com/share/188yVwgZ9M/" target="_blank"
                                        aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/drpoplisdentalclinic?igsh=d2JiN2ZhcmRwdjc2"
                                        target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/@sachetpopli2930" aria-label="YouTube"
                                        target="_blank"><i class="fab fa-youtube"></i></a>
                                    <a href="#" aria-label="X"><i class="fab fa-twitter"></i></a>
                                </div>

                            </div>

                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div class="footer-widget__column footer-widget__link">
                                <div class="footer-widget__title-box">
                                    <h3 class="footer-widget__title">Quick Links</h3>
                                </div>
                                <ul class="footer-widget__link-list list-unstyled">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="our-team.html">Our Team</a></li>
                                    <li><a href="treatment.html">Treatment</a></li>
                                    <li><a href="Medical-Visa-Assistance.html">Medical Visa Assistance</a></li>
                                    <li class="current"><a href="/panel-patients.html">Panel Patients & Beneficiaries</a></li>
                                    <li><a href="videos.html">Videos</a></li>
                                    <li><a href="images.html">Images</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="300ms">
                            <div class="footer-widget__column footer-widget__Contact">
                                <div class="footer-widget__title-box">
                                    <h3 class="footer-widget__title">Contact</h3>
                                </div>
                                <ul class="footer-widget__Contact-list list-unstyled">
                                    <li>
                                        <div class="icon">
                                            <span class="fas fa-map-marker"></span>
                                        </div>
                                        <div class="text">
                                            <span>Visit Office</span>
                                            <p>Office No. 11-12, Ground Floor, B-Block, DDA Market, CSC-1 , Yojana Vihar,
                                                Delhi-110092</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                        <div class="text">
                                            <span>Send Email</span>
                                            <p><a href="mailto:sachetpopli@gmail.com">sachetpopli@gmail.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="fas fa-phone-square"></span>
                                        </div>
                                        <div class="text">
                                            <span>Call Anytime</span>
                                            <p><a href="tel:+91-9968844479">+91-9968844479</a></p>
                                        </div>

                                    </li>
                                </ul>
                                <div class="footer-widget__map">
                                    <div class="footer-widget__map-frame">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56026.80581637234!2d77.27677435734955!3d28.639490237907314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc78e1078e45%3A0xcbb35bf3ce4a097a!2sDr%20Popli&#39;s%20Dental%20Clinic%20And%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1775726246848!5m2!1sen!2sin"
                                            allowfullscreen="" loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div class="site-footer__bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="site-footer__bottom-inner">
                                <p class="site-footer__bottom-text">
                                    ©
                                    <script>document.write(new Date().getFullYear());</script> Copyright Dr Popli’s
                                    Dental Clinic & Implant Centre | Developed & Managed by <a
                                        href="https://lso360seoplugin.com/" target="_blank"
                                        rel="noopener noreferrer"><u>Advertising India</u></a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
`;

// ── INJECT & ACTIVATE ────────────────
(function () {

  // Inject footer
  const footEl = document.getElementById('contact_us');
  if (footEl) footEl.innerHTML = FOOTER;



  // Set active nav link based on current filename
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();
