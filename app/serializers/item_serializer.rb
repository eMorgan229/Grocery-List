class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :price, :category
end
