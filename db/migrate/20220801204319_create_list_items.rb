class CreateListItems < ActiveRecord::Migration[6.1]
  def change
    create_table :list_items do |t|
      t.string :list_id
      t.string :item_id

      t.timestamps
    end
  end
end
