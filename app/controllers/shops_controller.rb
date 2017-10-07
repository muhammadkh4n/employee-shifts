class ShopsController < ApplicationController
  before_action :set_shop, except: [:index, :create]
  
  def index
    render json: Shop.all, status: :ok
  end

  def show
    render json: @shop, status: :ok
  end

  def create
    @shop = Shop.new(shop_params)
    if @shop.save
      render json: @shop, status: :created
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  def update
    if @shop.update(shop_params)
      render json: @shop, status: :ok
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @shop.destroy
    render json: Shop.all, status: :ok
  end

  private
  def shop_params
    params.require(:shop).permit(:name)
  end

  def set_shop
    @shop = Shop.find(params[:id])
  end
end
