import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice] = await Promise.all([
    fetchInvoiceById(id),
  ]);
  return (
    <main>
        <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Show Invoice',
            href: `/dashboard/invoices/${id}`,
            active: true,
          },
        ]}
      />
        <p>
            {`${id} - ${invoice.customer_id}`}
        </p>

    </main>
  );
}