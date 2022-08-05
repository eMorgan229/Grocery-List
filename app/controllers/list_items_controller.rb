class ListItemsController < ApplicationController
  before_action :set_list_item, only: [:show, :update, :destroy]

  # GET /list_items
  def index
    @list_items = ListItem.all

    render json: @list_items
  end

  # GET /list_items/1
  def show
    render json: @list_item
  end

  # POST /list_items
  def create
    list_item = ListItem.new(list_item_params)

    if list_item.save!
      render json: list_item, status: :created
    else
      render json: list_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /list_items/1
  def update
    list_item_data = Item.find_by(name:params[:item_name])


    if list_item_data.update(params[:checked])
      render json: list_item_data
    else
      render json: list_item_data.errors, status: :unprocessable_entity
    end
  end

  # DELETE /list_items/1
  def destroy
    ListItem.where(params[:item_id, :grocery_list_id]).destroy_all
  end

  def remove
    ListItem.where(item_id:params[:item_id] , grocery_list_id:params[:grocery_list_id]).destroy_all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list_item
      @list_item = ListItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def list_item_params
      params.permit(:grocery_list_id, :item_id, :checked)
    end
end
