// Node modules
import { useForm } from "react-hook-form"
import { motion } from "motion/react"

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
    const form = useForm<ContactFormValues>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        }
    })

    const onSubmit = (values: ContactFormValues) => {
        console.log(values)
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
                    className="mt-4 items-center w-full ">
                        <a href="https://www.linkedin.com/in/levuxuanan/">Send message</a>
                    </Button>
            </form>
           </Form>
        </motion.section>
    )
} 


