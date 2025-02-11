import React from 'react';
import Star from '../../assets/custom-icons/Star';
import { useForm } from 'react-hook-form';
import RightArrow from '../../assets/custom-icons/RightArrow';

const Book = () => {
    const {register, control, handleSubmit, formState: { errors }, watch} = useForm();

    const bookSpace = async (fields) => {
        console.log(fields);
    };
    return (
        <>
            <section className='xui-container xui-py-3' id='book-section'>
                <h3 className='xui-font-sz-400 xui-mt-half xui-font-w-600'><span className='color-grey-inactive'>Book a</span> Space</h3>
                <div class="book-section xui-mt-2">
                    <form onSubmit={handleSubmit(bookSpace)} autoComplete="off" noValidate>
                        <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2'>
                            <div>
                                <label for="firstName">
                                    <input type="text" id="firstName" placeholder="FirstName" {...register("firstName", {required: "This field is required",})} />
                                    <span className='xui-font-sz-100'>Firstname <Star /></span>
                                </label>
                                {errors.firstName && (<p className="xui-form-error-msg">{errors.firstName.message}</p>)}
                            </div>
                            <div>
                                <label for="lastName">
                                    <input type="text" id="lastName" placeholder="LastName" {...register("lastName", {required: "This field is required",})} />
                                    <span className='xui-font-sz-100'>Lastname <Star /></span>
                                </label>
                                {errors.lastName && (<p className="xui-form-error-msg">{errors.lastName.message}</p>)}
                            </div>
                            <div>
                                <label for="phoneNumber">
                                    <input type="tel" id="phoneNumber" placeholder="phoneNumber" {...register("phoneNumber", {required: "This field is required", pattern: {value: /^[0-9]{10,15}$/, message: "Phone number must be 10–15 digits"}})} />
                                    <span className='xui-font-sz-100'>Phone Number <Star /></span>
                                </label>
                                {errors.phoneNumber && (<p className="xui-form-error-msg">{errors.phoneNumber.message}</p>)}
                            </div>
                            <div>
                                <label for="emailAddress">
                                    <input type="email" id="emailAddress" placeholder="emailAddress" {...register("emailAddress", {required: "This field is required", pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}})} />
                                    <span className='xui-font-sz-100'>Email address <Star /></span>
                                </label>
                                {errors.emailAddress && (<p className="xui-form-error-msg">{errors.emailAddress.message}</p>)}
                            </div>
                            <div>
                                <label htmlFor="mySelect">
                                    <select id="mySelect" {...register("mySelect", { required: "This field is required" })}>
                                    <option value="" disabled selected hidden>
                                    </option>
                                    <option value="premium">Premium</option>
                                    <option value="basic">Basic</option>
                                    </select>
                                    <span className="xui-font-sz-100">Membership <Star /></span>
                                </label>
                                {errors.mySelect && (<p className="xui-form-error-msg">{errors.mySelect.message}</p>)}
                            </div>
                            <div>
                                <label for="bookingDate">
                                    <input type='date' id="bookingDate" placeholder="bookingDate" {...register("bookingDate", {required: "This field is required",})} />
                                </label>
                                {errors.bookingDate && (<p className="xui-form-error-msg">{errors.bookingDate.message}</p>)}
                            </div>
                            
                        </div>
                        <button className='gradient-btn xui-d-inline-flex xui-flex-ai-center xui-grid-gap-1-half xui-mt-2 xui-mx-auto'>
                            <p className='xui-font-sz-100'>Book a Space</p>
                            <RightArrow />
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Book;