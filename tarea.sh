#!/bin/bash

# Lista de todos los componentes que quieres instalar
components=(
  accordion
  alert
  alert-dialog
  aspect-ratio
  avatar
  badge
  breadcrumb
  button
  calendar
  card
  carousel
  chart
  checkbox
  collapsible
  combobox
  command
  context-menu
  data-table
  date-picker
  dialog
  drawer
  dropdown-menu
  form
  hover-card
  input
  input-otp
  label
  menubar
  navigation-menu
  pagination
  popover
  progress
  radio-group
  resizable
  scroll-area
  select
  separator
  sheet
  skeleton
  slider
  sonner
  switch
  table
  tabs
  textarea
  toast
  toggle
  toggle-group
  tooltip
)

# Bucle para instalar cada componente
for component in "${components[@]}"
do
  echo "Instalando $component ..."
  npx shadcn-ui@latest add "$component"
done

# Crear la carpeta shared-ui si no existe y mover todos los componentes a ella

mv components/ui/* app/shared-ui/

echo "Todos los componentes han sido instalados y movidos a app/shared-ui."
