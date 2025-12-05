// Node modules
import { useForm } from "react-hook-form"
import { motion } from "motion/react"
import emailjs from '@emailjs/browser'
import { useState } from "react"

// Custom modules
import { fadeUp } from "@/lib/animations"

// Components
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/SectionHeader"

// Types
type ContactFormValues = {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
}

export const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        }
    })

    const onSubmit = async (values: ContactFormValues) => {
        setIsLoading(true)
        
        try {
            // Cấu hình EmailJS - bạn cần thay thế các giá trị này
            const templateParams = {
                from_name: values.name,
                from_email: values.email,
                company: values.company,
                phone: values.phone,
                message: values.message,
                to_email: 'levuxuanan.it@gmail.com'
            }

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setIsSuccess(true)
            form.reset()
            
            // Reset success message sau 3 giây
            setTimeout(() => setIsSuccess(false), 3000)
        } catch (error) {
            console.error('Error sending email:', error)
            alert('An error occurred while sending the message. Please try again!')
        } finally {
            setIsLoading(false)
        }
    }   

    return (
        <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.8}}
        variants={fadeUp}
        className="mt-30 scroll-mt-10"
        id="contact">

            <SectionHeader
            subtitle="Contact"
            title="Let's make something awesome together!"
           />

           <Form {...form}>
            <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mx-auto sapce-y-4 mt-10">
                <div className="grid gird-cols-1 gap-4 md:grid-cols-2">
                    {/* Your name */}
                    <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                placeholder="Your name"
                                className="border-0"
                                {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    {/* Company */}
                    <FormField
                    control={form.control}
                    name="company"
                    render={({field}) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                placeholder="Company"
                                className="border-0"
                                {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    {/* Email */}
                    <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                type="email"
                                placeholder="you@example.com"
                                className="border-0"
                                {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    {/* Phone */}
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                type="tel"
                                placeholder="+8423456789"
                                className="border-0"
                                {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                    />
                </div>

                {/* Message */}
                    <FormField
                    control={form.control}
                    name="message"
                    render={({field}) => (
                        <FormItem className="w-full mt-4">
                            <FormControl>
                                <Textarea
                                className="h-36 border-0"
                                placeholder="Write your message..."
                                {...field}/>
                            </FormControl>
                        </FormItem>
                    )}
                    />
                    <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="mt-4 items-center w-full ">
                        {isLoading ? 'Sending...' : isSuccess ? 'Sent successfully!' : 'Send message'}
                    </Button>
                    
                    {isSuccess && (
                        <p className="text-green-600 text-center mt-2">
                            Thank you! Message sent successfully!
                        </p>
                    )}
            </form>
           </Form>
        </motion.section>
    )
} 


