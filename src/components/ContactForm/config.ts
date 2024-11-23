export const SERVICE_ID = 'service_vnz7a96';
export const TEMPLATE_ID = 'template_xpgdcbb';
export const PUBLIC_KEY = 'nv4XDgB6QifyGGd4T';

export const INITIAL_FORM_DATA = {
  from_name: '',
  from_email: '',
  phone: '',
  message: '',
  service: 'ZoliApp',
  to_email: 'info@zoliqua.com'
};

export const FORM_FIELDS = [
  {
    id: 'from_name',
    label: 'Nome e Cognome',
    type: 'text',
    name: 'from_name' as const,
    required: true
  },
  {
    id: 'from_email',
    label: 'Email',
    type: 'email',
    name: 'from_email' as const,
    required: true
  },
  {
    id: 'phone',
    label: 'Telefono',
    type: 'tel',
    name: 'phone' as const,
    required: true
  }
];