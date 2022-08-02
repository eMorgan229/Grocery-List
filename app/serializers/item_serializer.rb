class ItemSerializer < ActiveModel::Serializer
  attributes :item_name, :price, :category
end
