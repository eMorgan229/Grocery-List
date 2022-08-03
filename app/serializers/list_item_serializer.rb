class ListItemSerializer < ActiveModel::Serializer
  attributes :list_id, :item_id

  has_many :items
end
