import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const content = {"el":{"title":"Υπηρεσίες","description":"Προσφέρουμε προσαρμοσμένα CRM, διασυνδέσεις λογισμικού και αυτοματισμούς επιχειρησιακών διαδικασιών για να απλοποιήσουμε τη λειτουργία της επιχείρησής σας και να αυξήσουμε την αποδοτικότητα. Παράλληλα, παρέχουμε ασφαλείς λύσεις συνεργασίας που βοηθούν την ομάδα σας να εργάζεται ομαλά από οπουδήποτε."},"en":{"title":"Services","description":"We offer Custom CRMs, Software Integrations, and Business Automations to streamline your operations and improve efficiency. We also provide secure Collaboration solutions that help your team work smoothly from anywhere."}};
  return {
    content: content[params.lang]
  };
};