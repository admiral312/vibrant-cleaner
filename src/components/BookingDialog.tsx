
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CalendarDays, Mail, Phone, Send } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  contactPreference: z.enum(['phone', 'email', 'any'], { 
    required_error: 'Please select a contact preference.' 
  }),
  service: z.string({
    required_error: 'Please select a service.'
  }),
  message: z.string().min(5, { message: 'Message must be at least 5 characters.' }),
});

type BookingFormValues = z.infer<typeof formSchema>;

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const cleaningServices = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Move-in/Move-out Cleaning',
  'Post-Construction Cleaning',
  'Window Cleaning',
  'Carpet Cleaning'
];

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const { toast } = useToast();
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      contactPreference: 'any',
      service: '',
      message: '',
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log('Form submitted:', data);
    
    // Show success message
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you shortly to confirm your booking.",
      duration: 5000,
    });
    
    // Reset form and close dialog
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Book Your Cleaning Service</DialogTitle>
          <DialogDescription className="text-center">
            Fill out the form below and we'll get back to you promptly to confirm your booking.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 pt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-muted/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(123) 456-7890" {...field} className="bg-muted/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contactPreference"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Contact Preference</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="phone" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center">
                          <Phone className="w-4 h-4 mr-1 text-cleaner" />
                          Phone Call
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="email" />
                        </FormControl>
                        <FormLabel className="font-normal flex items-center">
                          <Mail className="w-4 h-4 mr-1 text-cleaner" />
                          Email
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="any" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Either
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Service</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-muted/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cleaningServices.map((service, index) => (
                        <SelectItem key={index} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your cleaning needs..."
                      className="resize-none bg-muted/50"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-cleaner hover:bg-cleaner-600 transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Booking Request
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
