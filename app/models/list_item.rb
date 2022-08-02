class ListItem < ApplicationRecord
    belongs_to :grocery_list
    belongs_to :item
end
