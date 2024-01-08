create table
  public."Profiles" (
    id uuid not null,
    username text null,
    constraint profiles_pkey primary key (id),
    constraint Profiles_id_fkey foreign key (id) references auth.users (id) on delete cascade
  ) tablespace pg_default;

  create table
  public."SheetModels" (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    name text not null,
    creator_id uuid null,
    constraint SheetModels_pkey primary key (id),
    constraint SheetModels_name_key unique (name),
    constraint SheetModels_creator_id_fkey foreign key (creator_id) references auth.users (id) on update cascade on delete cascade
  ) tablespace pg_default;

  create type EFieldType as enum (
    'String',
    'Stats',
    'Inventory'
  );
