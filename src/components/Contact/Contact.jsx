import React from 'react'
import * as valid from 'yup'
import { Formik, useFormik } from 'formik'

export default function Contact() {

    function register(values) {

        console.log(values);
    }
    let data = valid.object({

        name: valid.string().required('name us required').min(3, 'min char is 3 ').max(15, 'max char is 15'),
        email: valid.string().required('email is req'),
        phone: valid.string().required('phone num is req').matches(/^[0][0125][0-9]{8}$/, 'invalid phone')
    })
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',


        },
        validationSchema: data,
        onSubmit: (values) => register(values)
    })








    return (
        <>
            <div className='bg-success ' >
                <div className="container text-center">

                    <div className='py-5' >
                        <h1>CONTACT US</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className='text-white' viewBox="0 0 576 512">
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>

                    </div>

                    <form onSubmit={formik.handleSubmit} >
                        <div className='w-75 m-auto'>
                            <input type="text" className="form-control py-3 my-3  " id='name' name='name' placeholder="Name" values={formik.values.name} onChange={formik.handleChange} />

                            <input type="email" className="form-control  py-3 my-3" id='email' name='email' placeholder="Email" values={formik.values.email} onChange={formik.handleChange} />
                            <input type="tel" className="form-control   py-3 my-3" id='phone' name='phone' placeholder="Phone" values={formik.values.phone} onChange={formik.handleChange} />

                            <textarea className=' form-control   py-3 mb-5'  ></textarea>


                        </div>
                        <button  className='btn btn-primary mb-5' >submit</button>


                    </form>





                </div>



            </div>


        </>
    )
}
