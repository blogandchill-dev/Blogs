-- Category pages need cluster names at build time; nothing sensitive in them.
create policy "public clusters" on clusters for select to anon using (active);
