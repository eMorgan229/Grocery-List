require "rails_helper"

RSpec.describe ListItemsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/list_items").to route_to("list_items#index")
    end

    it "routes to #show" do
      expect(get: "/list_items/1").to route_to("list_items#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/list_items").to route_to("list_items#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/list_items/1").to route_to("list_items#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/list_items/1").to route_to("list_items#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/list_items/1").to route_to("list_items#destroy", id: "1")
    end
  end
end
