class ListItemSerializer < ActiveModel::Serializer
  attributes :id, :grocery_list_id, :item_id
end
