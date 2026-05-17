export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationMegaMenu = {
  columns: Array<{
    title: string;
    links: NavigationLink[];
  }>;
  themes: Array<{
    title: string;
    image: string;
    href: string;
  }>;
};

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  isPromo?: boolean;
  megaMenu?: NavigationMegaMenu;
};

export const navItems: NavigationItem[] = [
  {
    id: "promocao",
    label: "30% OFF",
    href: "/promocao",
    isPromo: true,
  },
  {
    id: "edicao-verao",
    label: "Edição de Verão",
    href: "/edicao-verao",
  },
  {
    id: "ocasioes",
    label: "Ocasiões",
    href: "/ocasioes",
  },
  {
    id: "colecao-2026",
    label: "Coleção 2026",
    href: "/novidades",
  },
  {
    id: "presentes",
    label: "Presentes",
    href: "/presentes",
  },
  {
    id: "bebe",
    label: "Bebê",
    href: "/bebe",
    megaMenu: {
      columns: [
        {
          title: "Roupas para Bebê",
          links: [
            { label: "Bodies", href: "/bebe/bodies" },
            { label: "Macacões", href: "/bebe/macacoes" },
            { label: "Conjuntos", href: "/bebe/conjuntos" },
            { label: "Vestidos", href: "/bebe/vestidos" },
            { label: "Casaquinhos", href: "/bebe/casaquinhos" },
            { label: "Pijamas", href: "/bebe/pijamas" },
          ],
        },
        {
          title: "Essenciais",
          links: [
            { label: "Mantas", href: "/bebe/mantas" },
            { label: "Babadores", href: "/bebe/babadores" },
            { label: "Toucas e Luvas", href: "/bebe/toucas-luvas" },
            { label: "Saída de Maternidade", href: "/bebe/saida-maternidade" },
            { label: "Meias", href: "/bebe/meias" },
            { label: "Praia Bebê", href: "/bebe/praia" },
          ],
        },
      ],
      themes: [
        {
          title: "Recém-nascido",
          image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=400&fit=crop",
          href: "/bebe/recem-nascido",
        },
        {
          title: "Batizado",
          image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
          href: "/bebe/batizado",
        },
        {
          title: "Primeiros Passeios",
          image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop",
          href: "/bebe/primeiros-passeios",
        },
        {
          title: "Algodão Premium",
          image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop",
          href: "/bebe/algodao-premium",
        },
      ],
    },
  },
  {
    id: "crianca",
    label: "Criança",
    href: "/crianca",
    megaMenu: {
      columns: [
        {
          title: "Meninas",
          links: [
            { label: "Vestidos", href: "/crianca/meninas/vestidos" },
            { label: "Blusas", href: "/crianca/meninas/blusas" },
            { label: "Saias", href: "/crianca/meninas/saias" },
            { label: "Shorts", href: "/crianca/meninas/shorts" },
            { label: "Conjuntos", href: "/crianca/meninas/conjuntos" },
            { label: "Moda Praia", href: "/crianca/meninas/moda-praia" },
          ],
        },
        {
          title: "Meninos",
          links: [
            { label: "Camisas", href: "/crianca/meninos/camisas" },
            { label: "Polos", href: "/crianca/meninos/polos" },
            { label: "Bermudas", href: "/crianca/meninos/bermudas" },
            { label: "Calças", href: "/crianca/meninos/calcas" },
            { label: "Conjuntos", href: "/crianca/meninos/conjuntos" },
            { label: "Moda Praia", href: "/crianca/meninos/moda-praia" },
          ],
        },
      ],
      themes: [
        {
          title: "Festa",
          image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400&h=400&fit=crop",
          href: "/crianca/festa",
        },
        {
          title: "Fim de Semana",
          image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",
          href: "/crianca/fim-de-semana",
        },
        {
          title: "Verão",
          image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400&h=400&fit=crop",
          href: "/crianca/verao",
        },
        {
          title: "Escola",
          image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&h=400&fit=crop",
          href: "/crianca/escola",
        },
      ],
    },
  },
  {
    id: "calcados",
    label: "Calçados",
    href: "/calcados",
    megaMenu: {
      columns: [
        {
          title: "Modelos",
          links: [
            { label: "Sapatilhas", href: "/calcados/sapatilhas" },
            { label: "Tênis", href: "/calcados/tenis" },
            { label: "Sandálias", href: "/calcados/sandalias" },
            { label: "Mocassins", href: "/calcados/mocassins" },
            { label: "Botas", href: "/calcados/botas" },
            { label: "Papetes", href: "/calcados/papetes" },
          ],
        },
        {
          title: "Por Idade",
          links: [
            { label: "Primeiros Passos", href: "/calcados/primeiros-passos" },
            { label: "Bebê", href: "/calcados/bebe" },
            { label: "Menina", href: "/calcados/menina" },
            { label: "Menino", href: "/calcados/menino" },
            { label: "Festa", href: "/calcados/festa" },
            { label: "Praia", href: "/calcados/praia" },
          ],
        },
      ],
      themes: [
        {
          title: "Primeiros Passos",
          image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
          href: "/calcados/primeiros-passos",
        },
        {
          title: "Festa",
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
          href: "/calcados/festa",
        },
        {
          title: "Casual",
          image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
          href: "/calcados/casual",
        },
        {
          title: "Verão",
          image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop",
          href: "/calcados/verao",
        },
      ],
    },
  },
  {
    id: "acessorios",
    label: "Acessórios",
    href: "/acessorios",
    megaMenu: {
      columns: [
        {
          title: "Cabelo e Look",
          links: [
            { label: "Laços", href: "/acessorios/lacos" },
            { label: "Tiara", href: "/acessorios/tiaras" },
            { label: "Presilhas", href: "/acessorios/presilhas" },
            { label: "Chapéus", href: "/acessorios/chapeus" },
            { label: "Bolsas", href: "/acessorios/bolsas" },
            { label: "Cintos", href: "/acessorios/cintos" },
          ],
        },
        {
          title: "Essenciais",
          links: [
            { label: "Meias", href: "/acessorios/meias" },
            { label: "Meia-calça", href: "/acessorios/meia-calca" },
            { label: "Mochilas", href: "/acessorios/mochilas" },
            { label: "Óculos de Sol", href: "/acessorios/oculos-de-sol" },
            { label: "Mantas", href: "/acessorios/mantas" },
            { label: "Kits Presente", href: "/acessorios/kits-presente" },
          ],
        },
      ],
      themes: [
        {
          title: "Laços",
          image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
          href: "/acessorios/lacos",
        },
        {
          title: "Praia",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
          href: "/acessorios/praia",
        },
        {
          title: "Presentes",
          image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400&h=400&fit=crop",
          href: "/acessorios/kits-presente",
        },
        {
          title: "Passeio",
          image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=400&fit=crop",
          href: "/acessorios/passeio",
        },
      ],
    },
  },
  {
    id: "quarto",
    label: "Quarto",
    href: "/quarto",
  },
];
