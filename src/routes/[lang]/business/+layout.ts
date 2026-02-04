import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
  const content = {"el":{"favicon":{"alt":"icon","url":"https://cdn1.dws.gr/storage/v1/object/public/images/041a8a23-c632-4714-bb95-cdc1cbdb7536/1738568187126M_Bus_Front.svg"}},"en":{"favicon":{"alt":"icon","url":"https://cdn1.dws.gr/storage/v1/object/public/images/041a8a23-c632-4714-bb95-cdc1cbdb7536/1738568187126M_Bus_Front.svg"}}};
  return {
    content: content[params.lang]
  };
};