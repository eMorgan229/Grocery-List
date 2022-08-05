class CreateGroceryLists < ActiveRecord::Migration[6.1]
  def change
    create_table :grocery_lists do |t|
      t.string :list_name
      t.integer :user_id
      # t.integer :list_item_id

      t.timestamps
    end
  end
end
