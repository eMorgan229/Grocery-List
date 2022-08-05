class AddCheckColumnToListItem < ActiveRecord::Migration[6.1]
  def change
    add_column :list_items, :checked, :boolean, default: false
  end
end
