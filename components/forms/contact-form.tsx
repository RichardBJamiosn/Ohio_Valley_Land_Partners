'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  leadType: z.enum(['land', 'commercial', 'investor', 'partnership', 'inquiry']),
  propertyInterest: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  defaultLeadType?: 'land' | 'commercial' | 'investor' | 'partnership' | 'inquiry';
}

export function ContactForm({ defaultLeadType = 'inquiry' }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      leadType: defaultLeadType,
      propertyInterest: '',
      budgetRange: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          source: 'website',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: 'Success',
        description: 'Your message has been sent. We\'ll be in touch soon!',
      });

      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
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
                <FormLabel>Phone (Optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(740) 555-0100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="leadType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interest Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="land">Land Wholesaling</SelectItem>
                  <SelectItem value="commercial">Commercial Real Estate</SelectItem>
                  <SelectItem value="investor">Investor Relations</SelectItem>
                  <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                  <SelectItem value="inquiry">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="propertyInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Type Interest (Optional)</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ''}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select if applicable" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="raw-land">Raw Land</SelectItem>
                    <SelectItem value="development-ready">Development-Ready</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="multi-use">Mixed-Use</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budgetRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget Range (Optional)</FormLabel>
                <Select onValueChange={field.onChange} value={field.value || ''}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select if applicable" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="under-100k">Under $100K</SelectItem>
                    <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                    <SelectItem value="5m-plus">$5M+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your real estate needs and goals..."
                  className="min-h-[120px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Share relevant details about your property interests or investment goals.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    </Form>
  );
}
