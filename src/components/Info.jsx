import img1 from '../assets/images/about/about-image-01.jpg'
import img2 from '../assets/images/about/about-image-02.jpg'
import teamImg1 from '../assets/images/team/team-01.png'

export default function Info() {
    return (
        <div id="about" class="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">

            <div class="container">
                <div class="-mx-4 flex flex-wrap items-center">
                    <div class="w-full px-4 lg:w-1/2">
                        <div class="mb-12 max-w-[540px] lg:mb-0">
                            <h2
                                class="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                                Innovative Tools for Real Estate Excellence
                            </h2>
                            <p class="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                                The main ‘thrust’ is to focus on educating our clients on how to best navigate the real estate market
                                with interactive guides and personalized consultations led by industry experts.
                                <br />
                                <br />
                                The main ‘thrust' is to focus on educating attendees on how to
                                best protect highly vulnerable business applications with
                                interactive panel.
                            </p>

                            <a href="javascript:void(0)"
                                class="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
                                Know More
                            </a>
                        </div>
                    </div>

                    <div class="w-full px-4 lg:w-1/2">
                        <div class="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                            <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                                <div class="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                                    <img src={img1} alt="about image"
                                        class="h-full w-full object-cover object-center" />
                                </div>
                            </div>

                            <div class="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                                <div class="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                                    <img src={img2} alt="about image"
                                        class="h-full w-full object-cover object-center" />
                                </div>

                                <div
                                    class="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                                    <div>
                                        <span class="block text-5xl font-extrabold text-white">
                                            09
                                        </span>
                                        <span class="block text-base font-semibold text-white">
                                            We have
                                        </span>
                                        <span class="block text-base font-medium text-white text-opacity-70">
                                            Years of experience
                                        </span>
                                    </div>
                                    <div>
                                        <span class="absolute left-0 top-0 -z-10">
                                            <svg width="106" height="144" viewBox="0 0 106 144" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.1" x="-67" y="47.127" width="113.378" height="131.304"
                                                    transform="rotate(-42.8643 -67 47.127)" fill="url(#paint0_linear_1416_214)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1416_214" x1="-10.3111" y1="47.127" x2="-10.3111"
                                                        y2="178.431" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" />
                                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span class="absolute right-0 top-0 -z-10">
                                            <svg width="130" height="97" viewBox="0 0 130 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.1" x="0.86792" y="-6.67725" width="155.563" height="140.614"
                                                    transform="rotate(-42.8643 0.86792 -6.67725)" fill="url(#paint0_linear_1416_215)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1416_215" x1="78.6495" y1="-6.67725" x2="78.6495"
                                                        y2="133.937" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" />
                                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span class="absolute bottom-0 right-0 -z-10">
                                            <svg width="175" height="104" viewBox="0 0 175 104" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.1" x="175.011" y="108.611" width="101.246" height="148.179"
                                                    transform="rotate(137.136 175.011 108.611)" fill="url(#paint0_linear_1416_216)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1416_216" x1="225.634" y1="108.611" x2="225.634" y2="256.79"
                                                        gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" />
                                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
                <div class="container mx-auto">
                    <div class="relative overflow-hidden">
                        <div class="-mx-4 flex flex-wrap items-stretch">
                            <div class="w-full px-4">
                                <div class="mx-auto max-w-[570px] text-center">
                                    <h2 class="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                                        <span>What Are You Looking For?</span>
                                        <span class="text-3xl font-normal md:text-[40px]">
                                            Get Started Now
                                        </span>
                                    </h2>
                                    <p class="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                                        There are many variations of passages of Lorem Ipsum but the
                                        majority have suffered in some form.
                                    </p>
                                    <a href="javascript:void(0)"
                                        class="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]">
                                        Let's have a meeting
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="absolute left-0 top-0">
                        <svg width="495" height="470" viewBox="0 0 495 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="55" cy="442" r="138" stroke="white" stroke-opacity="0.04" stroke-width="50" />
                            <circle cx="446" r="39" stroke="white" stroke-opacity="0.04" stroke-width="20" />
                            <path d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z" stroke="white"
                                stroke-opacity="0.08" stroke-width="12" />
                        </svg>
                    </span>
                    <span class="absolute bottom-0 right-0">
                        <svg width="493" height="470" viewBox="0 0 493 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="462" cy="5" r="138" stroke="white" stroke-opacity="0.04" stroke-width="50" />
                            <circle cx="49" cy="470" r="39" stroke="white" stroke-opacity="0.04" stroke-width="20" />
                            <path d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z" stroke="white"
                                stroke-opacity="0.06" stroke-width="13" />
                        </svg>
                    </span>
                </div>
            </div>

            <div class="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="mx-auto mb-[60px] max-w-[520px] text-center">
                                <span class="mb-2 block text-lg font-semibold text-primary">
                                    FAQ
                                </span>
                                <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                    Any Questions? Look Here
                                </h2>
                                <p class="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4 lg:w-1/2">
                            <div class="mb-12 flex lg:mb-[70px]">
                                <div
                                    class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                                    <svg width="32" height="32" viewBox="0 0 34 34" class="fill-current">
                                        <path
                                            d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z" />
                                        <path
                                            d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z" />
                                        <path
                                            d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z" />
                                    </svg>
                                </div>
                                <div class="w-full">
                                    <h3 class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                        Is TailGrids Well-documented?
                                    </h3>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        It takes 2-3 weeks to get your first blog post ready. That
                                        includes the in-depth research & creation of your monthly
                                        content ui/ux strategy that we do writing your first blog
                                        post.
                                    </p>
                                </div>
                            </div>
                            <div class="mb-12 flex lg:mb-[70px]">
                                <div
                                    class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                                    <svg width="32" height="32" viewBox="0 0 34 34" class="fill-current">
                                        <path
                                            d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z" />
                                        <path
                                            d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z" />
                                        <path
                                            d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z" />
                                    </svg>
                                </div>
                                <div class="w-full">
                                    <h3 class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                        Is TailGrids Well-documented?
                                    </h3>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        It takes 2-3 weeks to get your first blog post ready. That
                                        includes the in-depth research & creation of your monthly
                                        content ui/ux strategy that we do writing your first blog
                                        post.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 lg:w-1/2">
                            <div class="mb-12 flex lg:mb-[70px]">
                                <div
                                    class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                                    <svg width="32" height="32" viewBox="0 0 34 34" class="fill-current">
                                        <path
                                            d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z" />
                                        <path
                                            d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z" />
                                        <path
                                            d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z" />
                                    </svg>
                                </div>
                                <div class="w-full">
                                    <h3 class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                        Is TailGrids Well-documented?
                                    </h3>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        It takes 2-3 weeks to get your first blog post ready. That
                                        includes the in-depth research & creation of your monthly
                                        content ui/ux strategy that we do writing your first blog
                                        post.
                                    </p>
                                </div>
                            </div>
                            <div class="mb-12 flex lg:mb-[70px]">
                                <div
                                    class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                                    <svg width="32" height="32" viewBox="0 0 34 34" class="fill-current">
                                        <path
                                            d="M17.0008 0.690674C7.96953 0.690674 0.691406 7.9688 0.691406 17C0.691406 26.0313 7.96953 33.3625 17.0008 33.3625C26.032 33.3625 33.3633 26.0313 33.3633 17C33.3633 7.9688 26.032 0.690674 17.0008 0.690674ZM17.0008 31.5032C9.03203 31.5032 2.55078 24.9688 2.55078 17C2.55078 9.0313 9.03203 2.55005 17.0008 2.55005C24.9695 2.55005 31.5039 9.0313 31.5039 17C31.5039 24.9688 24.9695 31.5032 17.0008 31.5032Z" />
                                        <path
                                            d="M17.9039 6.32194C16.3633 6.05631 14.8227 6.48131 13.707 7.43756C12.5383 8.39381 11.8477 9.82819 11.8477 11.3688C11.8477 11.9532 11.9539 12.5376 12.1664 13.0688C12.3258 13.5469 12.857 13.8126 13.3352 13.6532C13.8133 13.4938 14.0789 12.9626 13.9195 12.4844C13.8133 12.1126 13.707 11.7938 13.707 11.3688C13.707 10.4126 14.132 9.50944 14.8758 8.87194C15.6195 8.23444 16.5758 7.96881 17.5852 8.18131C18.9133 8.39381 19.9758 9.50944 20.1883 10.7844C20.4539 12.3251 19.657 13.8126 18.2227 14.3969C16.8945 14.9282 16.0445 16.2563 16.0445 17.7969V21.1969C16.0445 21.7282 16.4695 22.1532 17.0008 22.1532C17.532 22.1532 17.957 21.7282 17.957 21.1969V17.7969C17.957 17.0532 18.382 16.3626 18.9664 16.1501C21.1977 15.2469 22.4727 12.9094 22.0477 10.4657C21.6758 8.39381 19.9758 6.69381 17.9039 6.32194Z" />
                                        <path
                                            d="M17.0531 24.8625H16.8937C16.3625 24.8625 15.9375 25.2875 15.9375 25.8188C15.9375 26.35 16.3625 26.7751 16.8937 26.7751H17.0531C17.5844 26.7751 18.0094 26.35 18.0094 25.8188C18.0094 25.2875 17.5844 24.8625 17.0531 24.8625Z" />
                                    </svg>
                                </div>
                                <div class="w-full">
                                    <h3 class="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                                        Is TailGrids Well-documented?
                                    </h3>
                                    <p class="text-base text-body-color dark:text-dark-6">
                                        It takes 2-3 weeks to get your first blog post ready. That
                                        includes the in-depth research & creation of your monthly
                                        content ui/ux strategy that we do writing your first blog
                                        post.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="absolute left-4 top-4 -z-[1]">
                        <svg width="48" height="134" viewBox="0 0 48 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="45.6673" cy="132" r="1.66667" transform="rotate(180 45.6673 132)" fill="#13C296" />
                            <circle cx="45.6673" cy="117.333" r="1.66667" transform="rotate(180 45.6673 117.333)" fill="#13C296" />
                            <circle cx="45.6673" cy="102.667" r="1.66667" transform="rotate(180 45.6673 102.667)" fill="#13C296" />
                            <circle cx="45.6673" cy="88.0001" r="1.66667" transform="rotate(180 45.6673 88.0001)" fill="#13C296" />
                            <circle cx="45.6673" cy="73.3335" r="1.66667" transform="rotate(180 45.6673 73.3335)" fill="#13C296" />
                            <circle cx="45.6673" cy="45.0001" r="1.66667" transform="rotate(180 45.6673 45.0001)" fill="#13C296" />
                            <circle cx="45.6673" cy="16.0001" r="1.66667" transform="rotate(180 45.6673 16.0001)" fill="#13C296" />
                            <circle cx="45.6673" cy="59.0001" r="1.66667" transform="rotate(180 45.6673 59.0001)" fill="#13C296" />
                            <circle cx="45.6673" cy="30.6668" r="1.66667" transform="rotate(180 45.6673 30.6668)" fill="#13C296" />
                            <circle cx="45.6673" cy="1.66683" r="1.66667" transform="rotate(180 45.6673 1.66683)" fill="#13C296" />
                            <circle cx="31.0013" cy="132" r="1.66667" transform="rotate(180 31.0013 132)" fill="#13C296" />
                            <circle cx="31.0013" cy="117.333" r="1.66667" transform="rotate(180 31.0013 117.333)" fill="#13C296" />
                            <circle cx="31.0013" cy="102.667" r="1.66667" transform="rotate(180 31.0013 102.667)" fill="#13C296" />
                            <circle cx="31.0013" cy="88.0001" r="1.66667" transform="rotate(180 31.0013 88.0001)" fill="#13C296" />
                            <circle cx="31.0013" cy="73.3335" r="1.66667" transform="rotate(180 31.0013 73.3335)" fill="#13C296" />
                            <circle cx="31.0013" cy="45.0001" r="1.66667" transform="rotate(180 31.0013 45.0001)" fill="#13C296" />
                            <circle cx="31.0013" cy="16.0001" r="1.66667" transform="rotate(180 31.0013 16.0001)" fill="#13C296" />
                            <circle cx="31.0013" cy="59.0001" r="1.66667" transform="rotate(180 31.0013 59.0001)" fill="#13C296" />
                            <circle cx="31.0013" cy="30.6668" r="1.66667" transform="rotate(180 31.0013 30.6668)" fill="#13C296" />
                            <circle cx="31.0013" cy="1.66683" r="1.66667" transform="rotate(180 31.0013 1.66683)" fill="#13C296" />
                            <circle cx="16.3333" cy="132" r="1.66667" transform="rotate(180 16.3333 132)" fill="#13C296" />
                            <circle cx="16.3333" cy="117.333" r="1.66667" transform="rotate(180 16.3333 117.333)" fill="#13C296" />
                            <circle cx="16.3333" cy="102.667" r="1.66667" transform="rotate(180 16.3333 102.667)" fill="#13C296" />
                            <circle cx="16.3333" cy="88.0001" r="1.66667" transform="rotate(180 16.3333 88.0001)" fill="#13C296" />
                            <circle cx="16.3333" cy="73.3335" r="1.66667" transform="rotate(180 16.3333 73.3335)" fill="#13C296" />
                            <circle cx="16.3333" cy="45.0001" r="1.66667" transform="rotate(180 16.3333 45.0001)" fill="#13C296" />
                            <circle cx="16.3333" cy="16.0001" r="1.66667" transform="rotate(180 16.3333 16.0001)" fill="#13C296" />
                            <circle cx="16.3333" cy="59.0001" r="1.66667" transform="rotate(180 16.3333 59.0001)" fill="#13C296" />
                            <circle cx="16.3333" cy="30.6668" r="1.66667" transform="rotate(180 16.3333 30.6668)" fill="#13C296" />
                            <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(180 16.3333 1.66683)" fill="#13C296" />
                            <circle cx="1.66732" cy="132" r="1.66667" transform="rotate(180 1.66732 132)" fill="#13C296" />
                            <circle cx="1.66732" cy="117.333" r="1.66667" transform="rotate(180 1.66732 117.333)" fill="#13C296" />
                            <circle cx="1.66732" cy="102.667" r="1.66667" transform="rotate(180 1.66732 102.667)" fill="#13C296" />
                            <circle cx="1.66732" cy="88.0001" r="1.66667" transform="rotate(180 1.66732 88.0001)" fill="#13C296" />
                            <circle cx="1.66732" cy="73.3335" r="1.66667" transform="rotate(180 1.66732 73.3335)" fill="#13C296" />
                            <circle cx="1.66732" cy="45.0001" r="1.66667" transform="rotate(180 1.66732 45.0001)" fill="#13C296" />
                            <circle cx="1.66732" cy="16.0001" r="1.66667" transform="rotate(180 1.66732 16.0001)" fill="#13C296" />
                            <circle cx="1.66732" cy="59.0001" r="1.66667" transform="rotate(180 1.66732 59.0001)" fill="#13C296" />
                            <circle cx="1.66732" cy="30.6668" r="1.66667" transform="rotate(180 1.66732 30.6668)" fill="#13C296" />
                            <circle cx="1.66732" cy="1.66683" r="1.66667" transform="rotate(180 1.66732 1.66683)" fill="#13C296" />
                        </svg>
                    </span>
                    <span class="absolute bottom-4 right-4 -z-[1]">
                        <svg width="48" height="134" viewBox="0 0 48 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="45.6673" cy="132" r="1.66667" transform="rotate(180 45.6673 132)" fill="#3758F9" />
                            <circle cx="45.6673" cy="117.333" r="1.66667" transform="rotate(180 45.6673 117.333)" fill="#3758F9" />
                            <circle cx="45.6673" cy="102.667" r="1.66667" transform="rotate(180 45.6673 102.667)" fill="#3758F9" />
                            <circle cx="45.6673" cy="88.0001" r="1.66667" transform="rotate(180 45.6673 88.0001)" fill="#3758F9" />
                            <circle cx="45.6673" cy="73.3333" r="1.66667" transform="rotate(180 45.6673 73.3333)" fill="#3758F9" />
                            <circle cx="45.6673" cy="45.0001" r="1.66667" transform="rotate(180 45.6673 45.0001)" fill="#3758F9" />
                            <circle cx="45.6673" cy="16.0001" r="1.66667" transform="rotate(180 45.6673 16.0001)" fill="#3758F9" />
                            <circle cx="45.6673" cy="59.0001" r="1.66667" transform="rotate(180 45.6673 59.0001)" fill="#3758F9" />
                            <circle cx="45.6673" cy="30.6668" r="1.66667" transform="rotate(180 45.6673 30.6668)" fill="#3758F9" />
                            <circle cx="45.6673" cy="1.66683" r="1.66667" transform="rotate(180 45.6673 1.66683)" fill="#3758F9" />
                            <circle cx="31.0006" cy="132" r="1.66667" transform="rotate(180 31.0006 132)" fill="#3758F9" />
                            <circle cx="31.0006" cy="117.333" r="1.66667" transform="rotate(180 31.0006 117.333)" fill="#3758F9" />
                            <circle cx="31.0006" cy="102.667" r="1.66667" transform="rotate(180 31.0006 102.667)" fill="#3758F9" />
                            <circle cx="31.0006" cy="88.0001" r="1.66667" transform="rotate(180 31.0006 88.0001)" fill="#3758F9" />
                            <circle cx="31.0008" cy="73.3333" r="1.66667" transform="rotate(180 31.0008 73.3333)" fill="#3758F9" />
                            <circle cx="31.0008" cy="45.0001" r="1.66667" transform="rotate(180 31.0008 45.0001)" fill="#3758F9" />
                            <circle cx="31.0008" cy="16.0001" r="1.66667" transform="rotate(180 31.0008 16.0001)" fill="#3758F9" />
                            <circle cx="31.0008" cy="59.0001" r="1.66667" transform="rotate(180 31.0008 59.0001)" fill="#3758F9" />
                            <circle cx="31.0008" cy="30.6668" r="1.66667" transform="rotate(180 31.0008 30.6668)" fill="#3758F9" />
                            <circle cx="31.0008" cy="1.66683" r="1.66667" transform="rotate(180 31.0008 1.66683)" fill="#3758F9" />
                            <circle cx="16.3341" cy="132" r="1.66667" transform="rotate(180 16.3341 132)" fill="#3758F9" />
                            <circle cx="16.3341" cy="117.333" r="1.66667" transform="rotate(180 16.3341 117.333)" fill="#3758F9" />
                            <circle cx="16.3341" cy="102.667" r="1.66667" transform="rotate(180 16.3341 102.667)" fill="#3758F9" />
                            <circle cx="16.3341" cy="88.0001" r="1.66667" transform="rotate(180 16.3341 88.0001)" fill="#3758F9" />
                            <circle cx="16.3338" cy="73.3333" r="1.66667" transform="rotate(180 16.3338 73.3333)" fill="#3758F9" />
                            <circle cx="16.3338" cy="45.0001" r="1.66667" transform="rotate(180 16.3338 45.0001)" fill="#3758F9" />
                            <circle cx="16.3338" cy="16.0001" r="1.66667" transform="rotate(180 16.3338 16.0001)" fill="#3758F9" />
                            <circle cx="16.3338" cy="59.0001" r="1.66667" transform="rotate(180 16.3338 59.0001)" fill="#3758F9" />
                            <circle cx="16.3338" cy="30.6668" r="1.66667" transform="rotate(180 16.3338 30.6668)" fill="#3758F9" />
                            <circle cx="16.3338" cy="1.66683" r="1.66667" transform="rotate(180 16.3338 1.66683)" fill="#3758F9" />
                            <circle cx="1.66732" cy="132" r="1.66667" transform="rotate(180 1.66732 132)" fill="#3758F9" />
                            <circle cx="1.66732" cy="117.333" r="1.66667" transform="rotate(180 1.66732 117.333)" fill="#3758F9" />
                            <circle cx="1.66732" cy="102.667" r="1.66667" transform="rotate(180 1.66732 102.667)" fill="#3758F9" />
                            <circle cx="1.66732" cy="88.0001" r="1.66667" transform="rotate(180 1.66732 88.0001)" fill="#3758F9" />
                            <circle cx="1.66732" cy="73.3333" r="1.66667" transform="rotate(180 1.66732 73.3333)" fill="#3758F9" />
                            <circle cx="1.66732" cy="45.0001" r="1.66667" transform="rotate(180 1.66732 45.0001)" fill="#3758F9" />
                            <circle cx="1.66732" cy="16.0001" r="1.66667" transform="rotate(180 1.66732 16.0001)" fill="#3758F9" />
                            <circle cx="1.66732" cy="59.0001" r="1.66667" transform="rotate(180 1.66732 59.0001)" fill="#3758F9" />
                            <circle cx="1.66732" cy="30.6668" r="1.66667" transform="rotate(180 1.66732 30.6668)" fill="#3758F9" />
                            <circle cx="1.66732" cy="1.66683" r="1.66667" transform="rotate(180 1.66732 1.66683)" fill="#3758F9" />
                        </svg>
                    </span>
                </div>
            </div>

            <div id="team" class="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap">
                        <div class="w-full px-4">
                            <div class="mx-auto mb-[60px] max-w-[485px] text-center">
                                <span class="mb-2 block text-lg font-semibold text-primary">
                                    Our Team Members
                                </span>
                                <h2 class="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                    Our Clients
                                </h2>
                                <p class="text-base text-body-color dark:text-dark-6">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="-mx-4 flex flex-wrap justify-center">
                        <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                            <div class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                                <div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                                    <img src={teamImg1} alt="team image" class="h-[120px] w-[120px] rounded-full" />
                                    <span
                                        class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                                    <span class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                                        <svg width="55" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5118 3.1009C13.3681 3.1009 14.0622 2.40674 14.0622 1.55045C14.0622 0.69416 13.3681 0 12.5118 0C11.6555 0 10.9613 0.69416 10.9613 1.55045C10.9613 2.40674 11.6555 3.1009 12.5118 3.1009Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.5038 3.1009C23.3601 3.1009 24.0543 2.40674 24.0543 1.55045C24.0543 0.69416 23.3601 0 22.5038 0C21.6475 0 20.9534 0.69416 20.9534 1.55045C20.9534 2.40674 21.6475 3.1009 22.5038 3.1009Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.4958 3.1009C33.3521 3.1009 34.0463 2.40674 34.0463 1.55045C34.0463 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9454 0.69416 30.9454 1.55045C30.9454 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.4875 3.1009C43.3438 3.1009 44.038 2.40674 44.038 1.55045C44.038 0.69416 43.3438 0 42.4875 0C41.6312 0 40.9371 0.69416 40.9371 1.55045C40.9371 2.40674 41.6312 3.1009 42.4875 3.1009Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M52.4795 3.1009C53.3358 3.1009 54.03 2.40674 54.03 1.55045C54.03 0.69416 53.3358 0 52.4795 0C51.6233 0 50.9291 0.69416 50.9291 1.55045C50.9291 2.40674 51.6233 3.1009 52.4795 3.1009Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.52045 13.0804C3.37674 13.0804 4.0709 12.3862 4.0709 11.5299C4.0709 10.6737 3.37674 9.97949 2.52045 9.97949C1.66416 9.97949 0.970001 10.6737 0.970001 11.5299C0.970001 12.3862 1.66416 13.0804 2.52045 13.0804Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5118 13.0804C13.3681 13.0804 14.0622 12.3862 14.0622 11.5299C14.0622 10.6737 13.3681 9.97949 12.5118 9.97949C11.6555 9.97949 10.9613 10.6737 10.9613 11.5299C10.9613 12.3862 11.6555 13.0804 12.5118 13.0804Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.5038 13.0804C23.3601 13.0804 24.0543 12.3862 24.0543 11.5299C24.0543 10.6737 23.3601 9.97949 22.5038 9.97949C21.6475 9.97949 20.9534 10.6737 20.9534 11.5299C20.9534 12.3862 21.6475 13.0804 22.5038 13.0804Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.4958 13.0804C33.3521 13.0804 34.0463 12.3862 34.0463 11.5299C34.0463 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9454 10.6737 30.9454 11.5299C30.9454 12.3862 31.6395 13.0804 32.4958 13.0804Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.4875 13.0804C43.3438 13.0804 44.038 12.3862 44.038 11.5299C44.038 10.6737 43.3438 9.97949 42.4875 9.97949C41.6312 9.97949 40.9371 10.6737 40.9371 11.5299C40.9371 12.3862 41.6312 13.0804 42.4875 13.0804Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M52.4795 13.0804C53.3358 13.0804 54.03 12.3862 54.03 11.5299C54.03 10.6737 53.3358 9.97949 52.4795 9.97949C51.6233 9.97949 50.9291 10.6737 50.9291 11.5299C50.9291 12.3862 51.6233 13.0804 52.4795 13.0804Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.52045 23.0604C3.37674 23.0604 4.0709 22.3662 4.0709 21.5099C4.0709 20.6536 3.37674 19.9595 2.52045 19.9595C1.66416 19.9595 0.970001 20.6536 0.970001 21.5099C0.970001 22.3662 1.66416 23.0604 2.52045 23.0604Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5118 23.0604C13.3681 23.0604 14.0622 22.3662 14.0622 21.5099C14.0622 20.6536 13.3681 19.9595 12.5118 19.9595C11.6555 19.9595 10.9613 20.6536 10.9613 21.5099C10.9613 22.3662 11.6555 23.0604 12.5118 23.0604Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.5038 23.0604C23.3601 23.0604 24.0543 22.3662 24.0543 21.5099C24.0543 20.6536 23.3601 19.9595 22.5038 19.9595C21.6475 19.9595 20.9534 20.6536 20.9534 21.5099C20.9534 22.3662 21.6475 23.0604 22.5038 23.0604Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.4958 23.0604C33.3521 23.0604 34.0463 22.3662 34.0463 21.5099C34.0463 20.6536 33.3521 19.9595 32.4958 19.9595C31.6395 19.9595 30.9454 20.6536 30.9454 21.5099C30.9454 22.3662 31.6395 23.0604 32.4958 23.0604Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.4875 23.0604C43.3438 23.0604 44.038 22.3662 44.038 21.5099C44.038 20.6536 43.3438 19.9595 42.4875 19.9595C41.6312 19.9595 40.9371 20.6536 40.9371 21.5099C40.9371 22.3662 41.6312 23.0604 42.4875 23.0604Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M52.4795 23.0604C53.3358 23.0604 54.03 22.3662 54.03 21.5099C54.03 20.6536 53.3358 19.9595 52.4795 19.9595C51.6233 19.9595 50.9291 20.6536 50.9291 21.5099C50.9291 22.3662 51.6233 23.0604 52.4795 23.0604Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.52045 33.0404C3.37674 33.0404 4.0709 32.3462 4.0709 31.4899C4.0709 30.6336 3.37674 29.9395 2.52045 29.9395C1.66416 29.9395 0.970001 30.6336 0.970001 31.4899C0.970001 32.3462 1.66416 33.0404 2.52045 33.0404Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5118 33.0404C13.3681 33.0404 14.0622 32.3462 14.0622 31.4899C14.0622 30.6336 13.3681 29.9395 12.5118 29.9395C11.6555 29.9395 10.9613 30.6336 10.9613 31.4899C10.9613 32.3462 11.6555 33.0404 12.5118 33.0404Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.5038 33.0404C23.3601 33.0404 24.0543 32.3462 24.0543 31.4899C24.0543 30.6336 23.3601 29.9395 22.5038 29.9395C21.6475 29.9395 20.9534 30.6336 20.9534 31.4899C20.9534 32.3462 21.6475 33.0404 22.5038 33.0404Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.4958 33.0404C33.3521 33.0404 34.0463 32.3462 34.0463 31.4899C34.0463 30.6336 33.3521 29.9395 32.4958 29.9395C31.6395 29.9395 30.9454 30.6336 30.9454 31.4899C30.9454 32.3462 31.6395 33.0404 32.4958 33.0404Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.4875 33.0404C43.3438 33.0404 44.038 32.3462 44.038 31.4899C44.038 30.6336 43.3438 29.9395 42.4875 29.9395C41.6312 29.9395 40.9371 30.6336 40.9371 31.4899C40.9371 32.3462 41.6312 33.0404 42.4875 33.0404Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M52.4795 33.0404C53.3358 33.0404 54.03 32.3462 54.03 31.4899C54.03 30.6336 53.3358 29.9395 52.4795 29.9395C51.6233 29.9395 50.9291 30.6336 50.9291 31.4899C50.9291 32.3462 51.6233 33.0404 52.4795 33.0404Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.52045 43.0203C3.37674 43.0203 4.0709 42.3262 4.0709 41.4699C4.0709 40.6136 3.37674 39.9194 2.52045 39.9194C1.66416 39.9194 0.970001 40.6136 0.970001 41.4699C0.970001 42.3262 1.66416 43.0203 2.52045 43.0203Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5118 43.0203C13.3681 43.0203 14.0622 42.3262 14.0622 41.4699C14.0622 40.6136 13.3681 39.9194 12.5118 39.9194C11.6555 39.9194 10.9613 40.6136 10.9613 41.4699C10.9613 42.3262 11.6555 43.0203 12.5118 43.0203Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.5038 43.0203C23.3601 43.0203 24.0543 42.3262 24.0543 41.4699C24.0543 40.6136 23.3601 39.9194 22.5038 39.9194C21.6475 39.9194 20.9534 40.6136 20.9534 41.4699C20.9534 42.3262 21.6475 43.0203 22.5038 43.0203Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.4958 43.0203C33.3521 43.0203 34.0463 42.3262 34.0463 41.4699C34.0463 40.6136 33.3521 39.9194 32.4958 39.9194C31.6395 39.9194 30.9454 40.6136 30.9454 41.4699C30.9454 42.3262 31.6395 43.0203 32.4958 43.0203Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.4875 43.0203C43.3438 43.0203 44.038 42.3262 44.038 41.4699C44.038 40.6136 43.3438 39.9194 42.4875 39.9194C41.6312 39.9194 40.9371 40.6136 40.9371 41.4699C40.9371 42.3262 41.6312 43.0203 42.4875 43.0203Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M52.4795 43.0203C53.3358 43.0203 54.03 42.3262 54.03 41.4699C54.03 40.6136 53.3358 39.9194 52.4795 39.9194C51.6233 39.9194 50.9291 40.6136 50.9291 41.4699C50.9291 42.3262 51.6233 43.0203 52.4795 43.0203Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.52045 53.0001C3.37674 53.0001 4.0709 52.3059 4.0709 51.4496C4.0709 50.5933 3.37674 49.8992 2.52045 49.8992C1.66416 49.8992 0.970001 50.5933 0.970001 51.4496C0.970001 52.3059 1.66416 53.0001 2.52045 53.0001Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5118 53.0001C13.3681 53.0001 14.0622 52.3059 14.0622 51.4496C14.0622 50.5933 13.3681 49.8992 12.5118 49.8992C11.6555 49.8992 10.9613 50.5933 10.9613 51.4496C10.9613 52.3059 11.6555 53.0001 12.5118 53.0001Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.5038 53.0001C23.3601 53.0001 24.0543 52.3059 24.0543 51.4496C24.0543 50.5933 23.3601 49.8992 22.5038 49.8992C21.6475 49.8992 20.9534 50.5933 20.9534 51.4496C20.9534 52.3059 21.6475 53.0001 22.5038 53.0001Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.4958 53.0001C33.3521 53.0001 34.0463 52.3059 34.0463 51.4496C34.0463 50.5933 33.3521 49.8992 32.4958 49.8992C31.6395 49.8992 30.9454 50.5933 30.9454 51.4496C30.9454 52.3059 31.6395 53.0001 32.4958 53.0001Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.4875 53.0001C43.3438 53.0001 44.038 52.3059 44.038 51.4496C44.038 50.5933 43.3438 49.8992 42.4875 49.8992C41.6312 49.8992 40.9371 50.5933 40.9371 51.4496C40.9371 52.3059 41.6312 53.0001 42.4875 53.0001Z"
                                                fill="#3758F9" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M52.4795 53.0001C53.3358 53.0001 54.03 52.3059 54.03 51.4496C54.03 50.5933 53.3358 49.8992 52.4795 49.8992C51.6233 49.8992 50.9291 50.5933 50.9291 51.4496C50.9291 52.3059 51.6233 53.0001 52.4795 53.0001Z"
                                                fill="#3758F9" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="text-center">
                                    <h4 class="mb-1 text-lg font-semibold text-dark dark:text-white">
                                        Melissa Tatcher
                                    </h4>
                                    <p class="mb-5 text-sm text-body-color dark:text-dark-6">
                                        Marketing Expert
                                    </p>
                                    <div class="flex items-center justify-center gap-5">
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                                                    fill="" />
                                                <path
                                                    d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                                                    fill="" />
                                                <path
                                                    d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                            <div class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                                <div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                                    <img src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-02.png" alt="team image"
                                        class="h-[120px] w-[120px] rounded-full" />
                                    <span
                                        class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                                    <span class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                                        <svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.54166 3.1009C3.39795 3.1009 4.09211 2.40674 4.09211 1.55045C4.09211 0.69416 3.39795 0 2.54166 0C1.68537 0 0.991211 0.69416 0.991211 1.55045C0.991211 2.40674 1.68537 3.1009 2.54166 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5338 3.1009C13.3901 3.1009 14.0843 2.40674 14.0843 1.55045C14.0843 0.69416 13.3901 0 12.5338 0C11.6776 0 10.9834 0.69416 10.9834 1.55045C10.9834 2.40674 11.6776 3.1009 12.5338 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 3.1009C23.3823 3.1009 24.0765 2.40674 24.0765 1.55045C24.0765 0.69416 23.3823 0 22.526 0C21.6697 0 20.9756 0.69416 20.9756 1.55045C20.9756 2.40674 21.6697 3.1009 22.526 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 3.1009C33.374 3.1009 34.0682 2.40674 34.0682 1.55045C34.0682 0.69416 33.374 0 32.5177 0C31.6614 0 30.9673 0.69416 30.9673 1.55045C30.9673 2.40674 31.6614 3.1009 32.5177 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 3.1009C43.3657 3.1009 44.0599 2.40674 44.0599 1.55045C44.0599 0.69416 43.3657 0 42.5094 0C41.6531 0 40.959 0.69416 40.959 1.55045C40.959 2.40674 41.6531 3.1009 42.5094 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5338 13.0804C13.3901 13.0804 14.0843 12.3862 14.0843 11.5299C14.0843 10.6737 13.3901 9.97949 12.5338 9.97949C11.6776 9.97949 10.9834 10.6737 10.9834 11.5299C10.9834 12.3862 11.6776 13.0804 12.5338 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 13.0804C23.3823 13.0804 24.0765 12.3862 24.0765 11.5299C24.0765 10.6737 23.3823 9.97949 22.526 9.97949C21.6697 9.97949 20.9756 10.6737 20.9756 11.5299C20.9756 12.3862 21.6697 13.0804 22.526 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 13.0804C33.374 13.0804 34.0682 12.3862 34.0682 11.5299C34.0682 10.6737 33.374 9.97949 32.5177 9.97949C31.6614 9.97949 30.9673 10.6737 30.9673 11.5299C30.9673 12.3862 31.6614 13.0804 32.5177 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 13.0804C43.3657 13.0804 44.0599 12.3862 44.0599 11.5299C44.0599 10.6737 43.3657 9.97949 42.5094 9.97949C41.6531 9.97949 40.959 10.6737 40.959 11.5299C40.959 12.3862 41.6531 13.0804 42.5094 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 23.0604C23.3823 23.0604 24.0765 22.3662 24.0765 21.5099C24.0765 20.6536 23.3823 19.9595 22.526 19.9595C21.6697 19.9595 20.9756 20.6536 20.9756 21.5099C20.9756 22.3662 21.6697 23.0604 22.526 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 23.0604C33.374 23.0604 34.0682 22.3662 34.0682 21.5099C34.0682 20.6536 33.374 19.9595 32.5177 19.9595C31.6614 19.9595 30.9673 20.6536 30.9673 21.5099C30.9673 22.3662 31.6614 23.0604 32.5177 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 23.0604C43.3657 23.0604 44.0599 22.3662 44.0599 21.5099C44.0599 20.6536 43.3657 19.9595 42.5094 19.9595C41.6531 19.9595 40.959 20.6536 40.959 21.5099C40.959 22.3662 41.6531 23.0604 42.5094 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 33.0404C33.374 33.0404 34.0682 32.3462 34.0682 31.4899C34.0682 30.6336 33.374 29.9395 32.5177 29.9395C31.6614 29.9395 30.9673 30.6336 30.9673 31.4899C30.9673 32.3462 31.6614 33.0404 32.5177 33.0404Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 33.0404C43.3657 33.0404 44.0599 32.3462 44.0599 31.4899C44.0599 30.6336 43.3657 29.9395 42.5094 29.9395C41.6531 29.9395 40.959 30.6336 40.959 31.4899C40.959 32.3462 41.6531 33.0404 42.5094 33.0404Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 43.0203C33.374 43.0203 34.0682 42.3262 34.0682 41.4699C34.0682 40.6136 33.374 39.9194 32.5177 39.9194C31.6614 39.9194 30.9673 40.6136 30.9673 41.4699C30.9673 42.3262 31.6614 43.0203 32.5177 43.0203Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 43.0203C43.3657 43.0203 44.0599 42.3262 44.0599 41.4699C44.0599 40.6136 43.3657 39.9194 42.5094 39.9194C41.6531 39.9194 40.959 40.6136 40.959 41.4699C40.959 42.3262 41.6531 43.0203 42.5094 43.0203Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 52.9998C43.3657 52.9998 44.0599 52.3057 44.0599 51.4494C44.0599 50.5931 43.3657 49.8989 42.5094 49.8989C41.6531 49.8989 40.959 50.5931 40.959 51.4494C40.959 52.3057 41.6531 52.9998 42.5094 52.9998Z"
                                                fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="text-center">
                                    <h4 class="mb-1 text-lg font-semibold text-dark dark:text-white">
                                        Stuard Ferrel
                                    </h4>
                                    <p class="mb-5 text-sm text-body-color dark:text-dark-6">
                                        Digital Marketer
                                    </p>
                                    <div class="flex items-center justify-center gap-5">
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                                                    fill="" />
                                                <path
                                                    d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                                                    fill="" />
                                                <path
                                                    d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                            <div class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                                <div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                                    <img src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png" alt="team image"
                                        class="h-[120px] w-[120px] rounded-full" />
                                    <span
                                        class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                                    <span class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                                        <svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.54166 3.1009C3.39795 3.1009 4.09211 2.40674 4.09211 1.55045C4.09211 0.69416 3.39795 0 2.54166 0C1.68537 0 0.991211 0.69416 0.991211 1.55045C0.991211 2.40674 1.68537 3.1009 2.54166 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5338 3.1009C13.3901 3.1009 14.0843 2.40674 14.0843 1.55045C14.0843 0.69416 13.3901 0 12.5338 0C11.6776 0 10.9834 0.69416 10.9834 1.55045C10.9834 2.40674 11.6776 3.1009 12.5338 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 3.1009C23.3823 3.1009 24.0765 2.40674 24.0765 1.55045C24.0765 0.69416 23.3823 0 22.526 0C21.6697 0 20.9756 0.69416 20.9756 1.55045C20.9756 2.40674 21.6697 3.1009 22.526 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 3.1009C33.374 3.1009 34.0682 2.40674 34.0682 1.55045C34.0682 0.69416 33.374 0 32.5177 0C31.6614 0 30.9673 0.69416 30.9673 1.55045C30.9673 2.40674 31.6614 3.1009 32.5177 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 3.1009C43.3657 3.1009 44.0599 2.40674 44.0599 1.55045C44.0599 0.69416 43.3657 0 42.5094 0C41.6531 0 40.959 0.69416 40.959 1.55045C40.959 2.40674 41.6531 3.1009 42.5094 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5338 13.0804C13.3901 13.0804 14.0843 12.3862 14.0843 11.5299C14.0843 10.6737 13.3901 9.97949 12.5338 9.97949C11.6776 9.97949 10.9834 10.6737 10.9834 11.5299C10.9834 12.3862 11.6776 13.0804 12.5338 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 13.0804C23.3823 13.0804 24.0765 12.3862 24.0765 11.5299C24.0765 10.6737 23.3823 9.97949 22.526 9.97949C21.6697 9.97949 20.9756 10.6737 20.9756 11.5299C20.9756 12.3862 21.6697 13.0804 22.526 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 13.0804C33.374 13.0804 34.0682 12.3862 34.0682 11.5299C34.0682 10.6737 33.374 9.97949 32.5177 9.97949C31.6614 9.97949 30.9673 10.6737 30.9673 11.5299C30.9673 12.3862 31.6614 13.0804 32.5177 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 13.0804C43.3657 13.0804 44.0599 12.3862 44.0599 11.5299C44.0599 10.6737 43.3657 9.97949 42.5094 9.97949C41.6531 9.97949 40.959 10.6737 40.959 11.5299C40.959 12.3862 41.6531 13.0804 42.5094 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 23.0604C23.3823 23.0604 24.0765 22.3662 24.0765 21.5099C24.0765 20.6536 23.3823 19.9595 22.526 19.9595C21.6697 19.9595 20.9756 20.6536 20.9756 21.5099C20.9756 22.3662 21.6697 23.0604 22.526 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 23.0604C33.374 23.0604 34.0682 22.3662 34.0682 21.5099C34.0682 20.6536 33.374 19.9595 32.5177 19.9595C31.6614 19.9595 30.9673 20.6536 30.9673 21.5099C30.9673 22.3662 31.6614 23.0604 32.5177 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 23.0604C43.3657 23.0604 44.0599 22.3662 44.0599 21.5099C44.0599 20.6536 43.3657 19.9595 42.5094 19.9595C41.6531 19.9595 40.959 20.6536 40.959 21.5099C40.959 22.3662 41.6531 23.0604 42.5094 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 33.0404C33.374 33.0404 34.0682 32.3462 34.0682 31.4899C34.0682 30.6336 33.374 29.9395 32.5177 29.9395C31.6614 29.9395 30.9673 30.6336 30.9673 31.4899C30.9673 32.3462 31.6614 33.0404 32.5177 33.0404Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 33.0404C43.3657 33.0404 44.0599 32.3462 44.0599 31.4899C44.0599 30.6336 43.3657 29.9395 42.5094 29.9395C41.6531 29.9395 40.959 30.6336 40.959 31.4899C40.959 32.3462 41.6531 33.0404 42.5094 33.0404Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 43.0203C33.374 43.0203 34.0682 42.3262 34.0682 41.4699C34.0682 40.6136 33.374 39.9194 32.5177 39.9194C31.6614 39.9194 30.9673 40.6136 30.9673 41.4699C30.9673 42.3262 31.6614 43.0203 32.5177 43.0203Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 43.0203C43.3657 43.0203 44.0599 42.3262 44.0599 41.4699C44.0599 40.6136 43.3657 39.9194 42.5094 39.9194C41.6531 39.9194 40.959 40.6136 40.959 41.4699C40.959 42.3262 41.6531 43.0203 42.5094 43.0203Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 52.9998C43.3657 52.9998 44.0599 52.3057 44.0599 51.4494C44.0599 50.5931 43.3657 49.8989 42.5094 49.8989C41.6531 49.8989 40.959 50.5931 40.959 51.4494C40.959 52.3057 41.6531 52.9998 42.5094 52.9998Z"
                                                fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="text-center">
                                    <h4 class="mb-1 text-lg font-semibold text-dark dark:text-white">
                                        Eva Hudson
                                    </h4>
                                    <p class="mb-5 text-sm text-body-color dark:text-dark-6">
                                        Creative Designer
                                    </p>
                                    <div class="flex items-center justify-center gap-5">
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                                                    fill="" />
                                                <path
                                                    d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                                                    fill="" />
                                                <path
                                                    d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                            <div class="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                                <div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                                    <img src="https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-04.png" alt="team image"
                                        class="h-[120px] w-[120px] rounded-full" />
                                    <span
                                        class="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
                                    <span class="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                                        <svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.54166 3.1009C3.39795 3.1009 4.09211 2.40674 4.09211 1.55045C4.09211 0.69416 3.39795 0 2.54166 0C1.68537 0 0.991211 0.69416 0.991211 1.55045C0.991211 2.40674 1.68537 3.1009 2.54166 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5338 3.1009C13.3901 3.1009 14.0843 2.40674 14.0843 1.55045C14.0843 0.69416 13.3901 0 12.5338 0C11.6776 0 10.9834 0.69416 10.9834 1.55045C10.9834 2.40674 11.6776 3.1009 12.5338 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 3.1009C23.3823 3.1009 24.0765 2.40674 24.0765 1.55045C24.0765 0.69416 23.3823 0 22.526 0C21.6697 0 20.9756 0.69416 20.9756 1.55045C20.9756 2.40674 21.6697 3.1009 22.526 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 3.1009C33.374 3.1009 34.0682 2.40674 34.0682 1.55045C34.0682 0.69416 33.374 0 32.5177 0C31.6614 0 30.9673 0.69416 30.9673 1.55045C30.9673 2.40674 31.6614 3.1009 32.5177 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 3.1009C43.3657 3.1009 44.0599 2.40674 44.0599 1.55045C44.0599 0.69416 43.3657 0 42.5094 0C41.6531 0 40.959 0.69416 40.959 1.55045C40.959 2.40674 41.6531 3.1009 42.5094 3.1009Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.5338 13.0804C13.3901 13.0804 14.0843 12.3862 14.0843 11.5299C14.0843 10.6737 13.3901 9.97949 12.5338 9.97949C11.6776 9.97949 10.9834 10.6737 10.9834 11.5299C10.9834 12.3862 11.6776 13.0804 12.5338 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 13.0804C23.3823 13.0804 24.0765 12.3862 24.0765 11.5299C24.0765 10.6737 23.3823 9.97949 22.526 9.97949C21.6697 9.97949 20.9756 10.6737 20.9756 11.5299C20.9756 12.3862 21.6697 13.0804 22.526 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 13.0804C33.374 13.0804 34.0682 12.3862 34.0682 11.5299C34.0682 10.6737 33.374 9.97949 32.5177 9.97949C31.6614 9.97949 30.9673 10.6737 30.9673 11.5299C30.9673 12.3862 31.6614 13.0804 32.5177 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 13.0804C43.3657 13.0804 44.0599 12.3862 44.0599 11.5299C44.0599 10.6737 43.3657 9.97949 42.5094 9.97949C41.6531 9.97949 40.959 10.6737 40.959 11.5299C40.959 12.3862 41.6531 13.0804 42.5094 13.0804Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M22.526 23.0604C23.3823 23.0604 24.0765 22.3662 24.0765 21.5099C24.0765 20.6536 23.3823 19.9595 22.526 19.9595C21.6697 19.9595 20.9756 20.6536 20.9756 21.5099C20.9756 22.3662 21.6697 23.0604 22.526 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 23.0604C33.374 23.0604 34.0682 22.3662 34.0682 21.5099C34.0682 20.6536 33.374 19.9595 32.5177 19.9595C31.6614 19.9595 30.9673 20.6536 30.9673 21.5099C30.9673 22.3662 31.6614 23.0604 32.5177 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 23.0604C43.3657 23.0604 44.0599 22.3662 44.0599 21.5099C44.0599 20.6536 43.3657 19.9595 42.5094 19.9595C41.6531 19.9595 40.959 20.6536 40.959 21.5099C40.959 22.3662 41.6531 23.0604 42.5094 23.0604Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 33.0404C33.374 33.0404 34.0682 32.3462 34.0682 31.4899C34.0682 30.6336 33.374 29.9395 32.5177 29.9395C31.6614 29.9395 30.9673 30.6336 30.9673 31.4899C30.9673 32.3462 31.6614 33.0404 32.5177 33.0404Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 33.0404C43.3657 33.0404 44.0599 32.3462 44.0599 31.4899C44.0599 30.6336 43.3657 29.9395 42.5094 29.9395C41.6531 29.9395 40.959 30.6336 40.959 31.4899C40.959 32.3462 41.6531 33.0404 42.5094 33.0404Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M32.5177 43.0203C33.374 43.0203 34.0682 42.3262 34.0682 41.4699C34.0682 40.6136 33.374 39.9194 32.5177 39.9194C31.6614 39.9194 30.9673 40.6136 30.9673 41.4699C30.9673 42.3262 31.6614 43.0203 32.5177 43.0203Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 43.0203C43.3657 43.0203 44.0599 42.3262 44.0599 41.4699C44.0599 40.6136 43.3657 39.9194 42.5094 39.9194C41.6531 39.9194 40.959 40.6136 40.959 41.4699C40.959 42.3262 41.6531 43.0203 42.5094 43.0203Z"
                                                fill="#3056D3" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.5094 52.9998C43.3657 52.9998 44.0599 52.3057 44.0599 51.4494C44.0599 50.5931 43.3657 49.8989 42.5094 49.8989C41.6531 49.8989 40.959 50.5931 40.959 51.4494C40.959 52.3057 41.6531 52.9998 42.5094 52.9998Z"
                                                fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="text-center">
                                    <h4 class="mb-1 text-lg font-semibold text-dark dark:text-white">
                                        Jackie Sanders
                                    </h4>
                                    <p class="mb-5 text-sm text-body-color dark:text-dark-6">
                                        Founder of Facebook
                                    </p>
                                    <div class="flex items-center justify-center gap-5">
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                        <a href="javascript:void(0)" class="text-dark-6 hover:text-primary">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                class="fill-current">
                                                <path
                                                    d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                                                    fill="" />
                                                <path
                                                    d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                                                    fill="" />
                                                <path
                                                    d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                                                    fill="" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}