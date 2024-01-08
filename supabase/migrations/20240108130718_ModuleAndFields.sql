
  create table
  public."SheetModuleModels" (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    title text null,
    sheet_model_id uuid not null,
    type public.efieldtype not null default 'String'::"efieldtype",
    fields jsonb null,
    constraint SheetModeModules_pkey primary key (id),
    constraint SheetModuleModels_sheet_model_id_fkey foreign key (sheet_model_id) references "SheetModels" (id) on update cascade on delete cascade
  ) tablespace pg_default;

  create table
  public."StatFieldModels" (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    sheet_module_model_id uuid not null,
    name text not null default 'NewStat'::text,
    value bigint not null default '0'::bigint,
    max_value bigint null,
    min_value bigint null,
    constraint StatFieldModels_pkey primary key (id),
    constraint StatFieldModels_sheet_module_model_id_fkey foreign key (sheet_module_model_id) references "SheetModuleModels" (id)
  ) tablespace pg_default;

  create table
  public."StringFieldModels" (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    sheet_module_model_id uuid not null,
    name text not null default 'NewStringField'::text,
    editable boolean not null default true,
    constraint StringFieldModels_pkey primary key (id),
    constraint StringFieldModels_sheet_module_model_id_fkey foreign key (sheet_module_model_id) references "SheetModuleModels" (id) on update cascade on delete cascade
  ) tablespace pg_default;