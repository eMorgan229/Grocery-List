class Item < ApplicationRecord
    has_many :list_items
    has_many :grocery_lists, through: :list_items

end
