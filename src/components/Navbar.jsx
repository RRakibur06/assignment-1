import logo from '../assets/images/logo/ICrew.png'

export default function Navbar() {
    return (
        <div class="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-[#3758F9]">
            <div class="container">
                <div class="relative -mx-4 flex items-center justify-between">
                    <div class="flex w-full items-center justify-between px-4 py-3">
                        <a href="index.html" class="navbar-logo block w-60 max-w-full px-4">
                            <img src={logo} alt="logo" class="header-logo h-12" />
                        </a>
                        <ul class="hidden lg:flex ">
                            <li class="group relative">
                                <a href="#home"
                                    class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70">
                                    Home
                                </a>
                            </li>
                            <li class="group relative">
                                <a href="#about"
                                    class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                                    About
                                </a>
                            </li>
                            <li class="group relative">
                                <a href="#pricing"
                                    class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                                    Pricing
                                </a>
                            </li>

                            <li class="group relative">
                                <a href="blog-grids.html"
                                    class="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10">
                                    Blog
                                </a>
                            </li>

                        </ul>

                        <div class=" w-[266px] lg:w-[250px]">
                            <a href="signin.html"
                                class="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70">
                                Sign In
                            </a>
                            <a href="signup.html"
                                class="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}